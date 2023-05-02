import React from 'react'

function ListTask() {
  const tasks = useSelector(state => {
    switch (state.filter) {
      case 'done':
        return state.tasks.filter(task => task.isDone);
      case 'not':
        return state.tasks.filter(task => !task.isDone);
      default:
        return state.tasks;
    }
  });
  const dispatch = useDispatch();
  const handleToggleFilter = (event) => {
    dispatch(toggleFilter(event.target.value));
  };

  const Task = ({ task }) => {
    const [editing, setEditing] = useState(false);
    const [description, setDescription] = useState(task.description);

    const handleToggle = () => {
      dispatch(toggleTask(task.id));
    };

    const handleEdit = () => {
      setEditing(true);
    };

    const handleCancel = () => {
      setDescription(task.description);
      setEditing(false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(editTask(task.id, description));
      setEditing(false);
    };

    return (
      <li>
        <label>
          <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
          <span>{task.description}</span>
        </label>
        <button onClick={handleEdit}>Edit</button>
        {editing && (
          <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        )}
      </li>
    );
  };

  return (
    <div>
          <div>
      <div>
        <label>
          <input type="radio" name="filter" value="all" defaultChecked onChange={handleToggleFilter} />
          All
        </label>
        <label>
          <input type="radio" name="filter" value="done" onChange={handleToggleFilter} />
          Done
        </label>
        <label>
          <input type="radio" name="filter" value="not" onChange={handleToggleFilter} />
          Not done
        </label>
      </div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
    </div>
  )
}

export default ListTask
