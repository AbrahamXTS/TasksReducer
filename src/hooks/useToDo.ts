import { task } from '../types/task';
import { action } from '../types/action';
import { useEffect, useReducer } from "react";
import { toDoReducer } from '../reducers/toDo';

export const useToDo = () => {

    const initialState: task[] = JSON.parse(localStorage.getItem("toDoList")!) || [];
    
	// Retorna un estado y una función que despacha acciones hacia la función reductora
	const [toDoList, dispatch] = useReducer(toDoReducer, initialState);
    
    useEffect(() => {
		localStorage.setItem("toDoList", JSON.stringify(toDoList));
	}, [toDoList]);

    // Actions
    const handleNewToDo = (todo: task) => {
		const action: action = {
			type: "@todo/add",
			payload: todo,
		};

		dispatch(action);
	};

	const handleRemoveToDo = (todo: task) => {
		const action: action = {
			type: "@todo/remove",
			payload: todo,
		};

		dispatch(action);
	};

	const handleToogleToDo = (todo: task) => {
		const action: action = {
			type: "@todo/toggle",
			payload: todo,
		};

		dispatch(action);
	};

    return { toDoList, handleNewToDo, handleRemoveToDo, handleToogleToDo };
};
