import { configureStore } from '@reduxjs/toolkit';
import sliceCounter from './counter';
import sliceAuth from './auth';

const store = configureStore({
    reducer: { counter: sliceCounter.reducer, auth: sliceAuth.reducer }
});

export const ActionStore = sliceCounter.actions;
export const ActionAuth = sliceAuth.actions;

export default store;
