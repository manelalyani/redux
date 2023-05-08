import { useDispatch } from "react-redux";
import { addTask } from "../js/action/action";
const AddTask = () => {
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Add a new task" required />
        <button type="submit">Add</button>
      </form>
    );
  };
  export default AddTask;