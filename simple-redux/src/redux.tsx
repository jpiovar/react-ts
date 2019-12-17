import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
  text: ''
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

function reducer(state: any, action: any) {
  if (action.type === 'INCREASE_COUNTER') {
    return {
      ...state,
      count: state.count + action.payload.number,
      text: action.payload.text
    }
  } else if (action.type === 'DECREASE_COUNTER') {
    return {
      ...state,
      count: state.count - action.payload.number,
      text: action.payload.text
    }
  }
}

export const increaseCounter = (countObj: { count: number, text: string }) => ({
  type: 'INCREASE_COUNTER',
  payload: countObj
});

export const decreaseCounter = (countObj: { count: number, text: string }) => ({
  type: 'DECREASE_COUNTER',
  payload: countObj
});