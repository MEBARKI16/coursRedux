import { createSlice } from "@reduxjs/toolkit";
const InitialStateCart = {
    isShow: true,
}
const SliceCartShow = createSlice({
    name: "cart",
    initialState: InitialStateCart,
    reducers: {
        handleShow(state) {
            state.isShow = !state.isShow
        }
    }
})

export default SliceCartShow;