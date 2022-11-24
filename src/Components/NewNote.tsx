import React from 'react';
import NoteForm from './NoteForm';
import { NoteData, Tag } from '../App';

type newNoteProps = {
	onSubmit: (data: NoteData) => void;
	onAddTag: (tag: Tag) => void;
	availableTags: Tag[];
};

const NewNote = ({ onSubmit, onAddTag, availableTags }: newNoteProps) => {
	return (
		<>
			<h1 className='mb-4'>New Note</h1>
			<NoteForm
				onSubmit={onSubmit}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
};

export default NewNote;
