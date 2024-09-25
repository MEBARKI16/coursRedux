import { createStore } from 'redux';

const initialState = { counter: 0, show: true };

const StoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "incresby5":
            return { ...state, counter: state.counter + action.value }
        case "increment":
            return { ...state, counter: state.counter + 1 };
        case "decrement":
            return { ...state, counter: state.counter - 1 };
        case "setShow":
            return { ...state, show: !state.show };
        default:
            return state;
    }
};

const store = createStore(StoreReducer);

export default store;
