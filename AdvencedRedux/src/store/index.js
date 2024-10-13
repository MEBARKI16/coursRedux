import { configureStore } from "@reduxjs/toolkit"
import SliceCart from "./cart";

const store = configureStore({
    reducer: SliceCart.reducer
})

export const actionCart = SliceCart.actions;

export default store;