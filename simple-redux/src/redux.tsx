import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
  text: 'nothing done'
}

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

function reducer(state: any, action: any) {
  debugger;
  if (action.type === 'INCREASE_COUNTER') {
    return {
      ...state,
      count: state.count + action.payload.count,
      text: action.payload.text
    }
  } else if (action.type === 'DECREASE_COUNTER') {
    return {
      ...state,
      count: state.count - action.payload.count,
      text: action.payload.text
    }
  } else {
    return state;
  }
}

export const increaseCounter = (countObj: any) => {
  debugger;
  return ({
  type: 'INCREASE_COUNTER',
  payload: countObj
})}

export const decreaseCounter = (countObj: { count: number, text: string }) => {
  debugger;
  return ({
    type: 'DECREASE_COUNTER',
    payload: countObj
  })
};