// src/Counter.tsx
import { actions } from '../store/slice.counter';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </div>
  );
}