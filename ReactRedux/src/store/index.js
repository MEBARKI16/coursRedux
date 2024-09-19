import redux from 'redux'


const StoreReducer = ({ value = { counter: 0 }, action }) => {
    switch (action.type) {
        case "increment": return { counter: value.counter + 1 };
        case "decrement": return { counter: value.counter - 1 };
        default: return value;
    }
}
const store = redux.createStore(StoreReducer);
export default store;
