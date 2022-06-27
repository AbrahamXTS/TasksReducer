import { TaskItem } from "./TaskItem";
import { task } from "../types/task";

interface Props {
	list: task[];
	handleRemoveToDo: (todo: task) => void;
	handleToogleToDo: (todo: task) => void;
}

export const TaskList = ({ list, handleRemoveToDo, handleToogleToDo }: Props) => (
	<div className="col-6">
		<ul className="list-group">
			{list.map((task) => (
				<TaskItem
					task={task}
					key={task.id}
					handleToogleToDo={handleToogleToDo}
					handleRemoveToDo={handleRemoveToDo}
				/>
			))}
		</ul>
	</div>
);

