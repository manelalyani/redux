import { ADD_TASK, EDIT_TASK, TOGGLE_FILTER,TOGGLE_TASK } from "./type";


 export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const editTask = (taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: {
    id: taskId,
    task: updatedTask
  }
});

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter
});
export const toggleTask = (filter) => ({
  type: TOGGLE_TASK,
  payload: filter

});