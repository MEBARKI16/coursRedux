import { createStore } from 'redux';

const initialState = { counter: 0 };

const StoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1 };
        case "decrement":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const store = createStore(StoreReducer);

export default store;
