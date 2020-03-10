import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }

    case 'DECREMENT':
      return {
        count: state.count - 1
      }

    case 'RESET':
      return {
        count: 0
      }
    
    default:
      return state;
  }
  
// ----- Same as above switch statement. Switch is preferred over If/else and easily scalable -----
/*   if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    }
  } 
  else {
    return state;
  } */
  
});

// Action - An object that gets sent to the store
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});



console.log(store.getState());