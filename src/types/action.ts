import { task } from './task';

export type action = {
	type: "@todo/add" | "@todo/remove" | "@todo/toggle";
	payload: task;
}