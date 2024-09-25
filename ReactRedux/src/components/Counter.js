import classes from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const [isOpen, SetIsOpen] = useState(true);
  const x = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    SetIsOpen(!isOpen)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isOpen && <div className={classes.value}>{x}</div>}
      <div>
        <button onClick={() => { dispatch({ type: "incresby5", value: 100 }) }}>Incres By 5</button>
        <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
        <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
