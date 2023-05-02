import React from 'react'

function AddTask() {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
      event.preventDefault();
      const task = {
        id: new Date().getTime(),
        description: event.target.description.value,
        isDone: false
      };
      dispatch(addTask(task));
      event.target.reset();
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Add a new task" required />
        <button type="submit">Add</button>
      </form>
    
    </div>
  )
}

export default AddTask
