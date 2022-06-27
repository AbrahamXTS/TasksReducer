import { task } from "../types/task";
import { action } from "../types/action";

export const toDoReducer = (state: task[], action: action): task[] => {
	switch (action.type) {
		case "@todo/add":
			return [...state, action.payload];

		case "@todo/remove":
			return state.filter((task) => task.id != action.payload.id);

		case "@todo/toggle":
			return state.map((task) => {
				if (task.id === action.payload.id) {
					return {
						...task,
						done: !task.done,
					};
				} else {
					return task;
				}
			});

		default:
			return state;
	}
};
