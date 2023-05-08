  const initState = {
    tasks: [],
    filter: 'all',
  };
export const reducer =(state = initState, action) =>{
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'EDIT_TASK':
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        return {
          ...state,
          tasks: updatedTasks,
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  
  
 
};
    