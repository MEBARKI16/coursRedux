import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ActionStore } from '../store';
const Counter = () => {
  const x = useSelector(state => state.counter);
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(ActionStore.Toggle())
  };
  const value = 50;
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{x}</div>}
      <div>
        <button onClick={() => { dispatch(ActionStore.Incres(100)) }}>Incres By {value}</button>
        <button onClick={() => { dispatch(ActionStore.Decrement()) }}>Decrement</button>
        <button onClick={() => { dispatch(ActionStore.Increment()) }}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
