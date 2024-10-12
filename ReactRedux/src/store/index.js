import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

const slideCounter = createSlice({
    name: counter,
    initialState,
    reducers: {
        Increment(state) {
            state.counter++
        },
        Decrement(state) {
            state.counter--
        },
        Incres(state, action) {
            state.counter = state.counter + action.ammount
        },
        Toggle() { }

    }
})

const store = configureStore({
    reducer: slideCounter
});

export default store;
