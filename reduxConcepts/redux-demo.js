const redux = require("redux");

const counterReducer = (state = {
    counter2: 0
}, action) => {
 return { counter2: state.counter2 + 1 };
}
const store = redux.createStore(counterReducer);

const Affiche = () => {
    const y = store.getState()
    console.log(y)
}
store.subscribe(Affiche)
Affiche()
store.dispatch({type : "increment"})
store.dispatch({type : "increment"})

