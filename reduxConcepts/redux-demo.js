const redux = require("redux");

const counterReducer = (state = {
    counter2: 0
}, action) => {
    switch (action.type) {
        case 'increment': return { counter2: state.counter2 + 1 };
        default: return state;
    }
}
const store = redux.createStore(counterReducer);

const Affiche = () => {
    const y = store.getState()
    console.log(y)
}

store.subscribe(Affiche)
store.dispatch({ type: "increment" })