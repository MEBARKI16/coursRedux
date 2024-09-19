import React, { useState, useEffect } from 'react';
import classes from './Counter.module.css';
import store from '../store';

const Counter = () => {
  const [counter, setCounter] = useState(store.getState().counter);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().counter);
    });
    return () => {
      unsubscribe(); // Clean up the subscription when the component unmounts
    };
  }, []);

  const toggleCounterHandler = () => {
    store.dispatch({ type: 'increment' });
    console.log("Counter incremented");
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
