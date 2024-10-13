import { configureStore } from "@reduxjs/toolkit"
import SliceCartShow from "./cartShow";
import SliceManage from "./cartManage";

const store = configureStore({
    reducer: { show: SliceCartShow.reducer, manage: SliceManage.reducer }
})

export const actionCart = SliceCartShow.actions;
export const actionManage = SliceManage.actions;

export default store;