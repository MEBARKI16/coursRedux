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
                state.totalQuantite = state.items.length;
            }
            else {
                isExiste.quantite++;
            }
        },
        onPlus(state, action) {
            const x = state.items.find(x => x.id === action.payload);
            x.quantite++;
        },
        onMoin(state, action) {
            const x = state.items.find(x => x.id === action.payload);
            if (x.quantite !== 1) {
                x.quantite--;
            }
            else {
                const nouveauTableau = state.items.filter(objet => objet.id !== action.payload);
                state.items = nouveauTableau
            }
        }

    }
})

export default SliceManage;