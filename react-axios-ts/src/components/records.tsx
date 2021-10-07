import { actions } from '../store/records.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Records() {
  const arr = useAppSelector((state) => state.records.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{arr}</p>
      <button onClick={() => dispatch(actions.add('new'))}>Add record</button>
      <button onClick={() => dispatch(actions.remove())}>Remove record</button>
    </div>
  );
}