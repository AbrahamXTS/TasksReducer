import { useToDo } from "./hooks/useToDo";
import { TaskList } from "./components/TaskList";
import { NewTaskForm } from "./components/NewTaskForm";

function App() {

	/*
		Aunque pueda sonar tentador llamar a las acciones desde cada componente, eso ocasionaria
		que se creen diversos estados con cada llamada al hook.
	*/
	const { toDoList, handleNewToDo, handleToogleToDo, handleRemoveToDo } = useToDo();

	return (
		<div className="container">
			<h1 className="mt-3 text-center">TaskApp</h1>
			<hr />
			<div className="row pt-3">
				<TaskList
					list={toDoList}
					handleRemoveToDo={handleRemoveToDo}
					handleToogleToDo={handleToogleToDo}
				/>
				<div className={`${toDoList.length > 0 ? "col-6" : "col-12"}`}>
					<h4>Agregar Tarea</h4>
					<hr />
					<NewTaskForm handleNewToDo={handleNewToDo} />
				</div>
			</div>
		</div>
	);
}

export default App;
