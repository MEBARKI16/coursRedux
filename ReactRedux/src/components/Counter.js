import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ActionStore } from '../store';

const Counter = () => {
  // Accès à l'état via useSelector
  const counterValue = useSelector(state => state.counter.counter);  // Correction ici
  const show = useSelector(state => state.counter.show);  // Correction ici
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(ActionStore.Toggle());
  };

  const value = 50;

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
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
