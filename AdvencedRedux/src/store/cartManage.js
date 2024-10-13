import { createSlice } from "@reduxjs/toolkit"

const initialStateManage = {
    items: [],
    totalQuantite: 0
}

const SliceManage = createSlice({
    name: "manage",
    initialState: initialStateManage,
    reducers: {
        addItemtoCart(state, action) {
            const isExiste = state.items.find(x => x.id === action.payload.id)
            if (!isExiste) {
                state.items.push({
                    id: action.payload.id,
                    quantite: 1,
                    prix: action.payload.prix,
                    totalPrix: action.payload.prix
                })
            }
        }
    }
})

export default SliceManage;