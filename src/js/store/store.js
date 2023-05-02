import { createStore } from 'redux';

const initState = {
  tasks: [],
  filter: 'all'
};

const reducer = (state = initState, action) => {
  // handle actions here
};

 export const store = createStore(reducer);