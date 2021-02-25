import { createStore } from 'redux';
import reducer from '../src/reducers/index';

const initialState = {
    query: '',
    results: [],
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();

export default store;
