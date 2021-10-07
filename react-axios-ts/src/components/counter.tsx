// src/Counter.tsx
import { actions, decrementAsync, incrementAsync } from '../store/counter.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      <br/>
      with delay
      <br/>
      <button onClick={() => dispatch(incrementAsync(1))}>+</button>
      <button onClick={() => dispatch(decrementAsync(1))}>-</button>
    </div>
  );
}