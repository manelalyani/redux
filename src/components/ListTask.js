import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) =>
    state.filter === 'done'
      ? state.tasks.filter((Task) => Task.isDone)
      : state.filter === 'not'
      ? state.tasks.filter((task) => !task.isDone)
      : state.tasks
  );
  const dispatch = useDispatch();

  function handleToggle(id) {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  }

  return (
    <ul>
      {tasks.map((task) => (

       <Task key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </ul>
  );
}
export default ListTask;