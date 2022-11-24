import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import EditNote from './Components/EditNote';
import NewNote from './Components/NewNote';
import { useLocalStorage } from './useLocalStorage';

export type Note = {
	id: string;
} & NoteData;

export type NoteData = {
	title: string;
	markdown: string;
	tags: Tag[];
};

export type Tag = {
	id: string;
	label: string;
};

export type RawNote = {
	id: string;
} & RawNoteData;

export type RawNoteData = {
	title: string;
	markdown: string;
	tagIds: string[];
};

const App = () => {
	const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
	const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

	const notesWithTags = useMemo(() => {
		return notes.map((note) => {
			return {
				...note,
				tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
			};
		});
	}, [notes, tags]);

	function onCreateNote({ tags, ...data }: NoteData) {
		setNotes((prevNotes) => {
			return [
				...prevNotes,
				{ ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
			];
		});
	}

	const addTag = (tag: Tag) => {
		setTags((prev) => [...prev, tag]);
	};

	return (
		<Container className='my-4'>
			<Routes>
				<Route path='/' element={<h1>home</h1>} />
				<Route
					path='/new'
					element={
						<NewNote
							onSubmit={onCreateNote}
							onAddTag={addTag}
							availableTags={tags}
						/>
					}
				/>
				<Route path='/:id'>
					<Route index element={<h1>show</h1>} />
					<Route path='edit' element={<EditNote />} />
				</Route>

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Container>
	);
};

export default App;
