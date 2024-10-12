import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

const initialStateCounter = { counter: 0, show: true };

const sliceCounter = createSlice({
    name: "counter",
    initialState : initialStateCounter,
    reducers: {
        Increment(state) {
            state.counter++;
        },
        Decrement(state) {
            state.counter--;
        },
        Incres(state, action) {
            state.counter = state.counter + action.payload;
        },
        Toggle(state) {
            state.show = !state.show;
        }
    }
});
const initialStateAuth = { isAuthentificated: true }
const sliceAuth = createSlice({
    name: "Auth",
    initialState: initialStateAuth,
    reducers: {
        login(state) {
            state.isAuthentificated = true;
        },
        logout(state) {
            state.isAuthentificated = false;
        }
    }
})
const store = configureStore({
    reducer: { counter: sliceCounter.reducer, auth: sliceAuth.reducer }
});

export const ActionStore = sliceCounter.actions;
export const ActionAuth = sliceAuth.actions;

export default store;
