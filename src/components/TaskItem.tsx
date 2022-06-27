import { task } from "../types/task";

interface Props {
	task: task;
	handleRemoveToDo: (todo: task) => void;
	handleToogleToDo: (todo: task) => void;
}

export const TaskItem = ({ task, handleRemoveToDo, handleToogleToDo, }: Props) => { 
	
	const { description } = task;

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<div>
				<input
					type="checkbox"
					checked={task.done}
					onChange={() => handleToogleToDo(task)}
				/>
				<span className={`ms-3 ${task.done ? "text-decoration-line-through" : ""}`}>
					{description}
				</span>
			</div>
			<button className="btn btn-danger" onClick={() => handleRemoveToDo(task)}>
				<i className="bi bi-trash"></i>
			</button>
		</li>
	);
};
