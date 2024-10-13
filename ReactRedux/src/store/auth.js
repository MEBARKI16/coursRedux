import { createSlice } from "@reduxjs/toolkit";
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
export default sliceAuth;