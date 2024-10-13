import { createSlice } from "@reduxjs/toolkit";
const initialStateCounter = { counter: 0, show: true };

const sliceCounter = createSlice({
    name: "counter",
    initialState: initialStateCounter,
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
export default sliceCounter;