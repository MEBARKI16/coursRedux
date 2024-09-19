import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const x = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{x}</div>
      <div>
        <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
        <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
