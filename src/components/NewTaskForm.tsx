import { task } from '../types/task';
import { FormEvent, useState } from 'react';

interface Props {
	handleNewToDo: (todo: task) => void; 
}

export const NewTaskForm = ({ handleNewToDo }: Props) => {

	const [description, setDescription] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		handleNewToDo({
			id: new Date().getTime(),
			description: description,
			done: false
		});

		setDescription("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={description}
				className="form-control"
				placeholder="¿Qué hay que hacer?"
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				type="submit"
				value="Agregar tarea"
				className="btn btn-outline-primary mt-3"
			/>
		</form>
	);
};
