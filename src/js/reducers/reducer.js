const reducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.payload.id) {
              return { ...task, ...action.payload.task };
            }
            return task;
          })
        };
      case TOGGLE_FILTER:
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  };