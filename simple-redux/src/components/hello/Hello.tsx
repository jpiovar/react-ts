import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "../../redux";
import './Hello.scss';


export const Hello = () => {
  const {count, text} = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const decreaseAction = () => {
    dispatch(decreaseCounter({ count: 2, text: 'decrease' }));
  }

  return (
    <main className="hello">
      <div className="title">Count: {count}, Action: {text}</div>
      <button onClick={() => dispatch(increaseCounter({ count: 1, text: 'increase' }))}>Increase count</button>
      <br/>
      <button onClick={decreaseAction}>Decrease count</button>
    </main>
  );
};