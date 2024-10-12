import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

const slideCounter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        Increment(state) {
            state.counter++;
        },
        Decrement(state) {
            state.counter--;
        },
        Incres(state, action) {
            state.counter = state.counter + action.payload; // Correction ici
        },
        Toggle(state) {
            state.show = !state.show; // Ajout de la logique pour alterner l'état
        }
    }
});

const store = configureStore({
    reducer: slideCounter.reducer
});

export const ActionStore = slideCounter.actions;

export default store;
