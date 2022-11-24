import React from 'react';
import NoteForm from './NoteForm';
import { NoteData } from '../App';

type newNoteProps = {
	onSubmit: (data: NoteData) => void;
};

const NewNote = ({ onSubmit }: newNoteProps) => {
	return (
		<>
			<h1 className='mb-4'>New Note</h1>
			<NoteForm onSubmit={onSubmit} />
		</>
	);
};

export default NewNote;
