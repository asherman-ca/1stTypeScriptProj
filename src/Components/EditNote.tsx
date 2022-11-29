import React from 'react';
import NoteForm from './NoteForm';
import { NoteData, Tag } from '../App';
import { useNote } from './NoteLayout';

type editNoteProps = {
	onSubmit: (id: string, data: NoteData) => void;
	onAddTag: (tag: Tag) => void;
	availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: editNoteProps) => {
	const note = useNote();

	return (
		<>
			<h1 className='mb-4'>Edit Note</h1>
			<NoteForm
				title={note.title}
				markdown={note.markdown}
				tags={note.tags}
				onAddTag={onAddTag}
				availableTags={availableTags}
				onSubmit={(data) => onSubmit(note.id, data)}
			/>
		</>
	);
};

export default EditNote;
