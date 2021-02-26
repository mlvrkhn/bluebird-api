import { createStore } from 'redux';
import reducer from '../src/reducers/index';

const initialState = {
    query: '',
    pending: false,
    results: [
        {
            orgNum: '911738061',
            navn: 'Joe & The Juice',
            website: 'joejuice.com',
            email: 'joe@juice.com',
            bankrupt: true,
        },
        {
            orgNum: '911738026',
            navn: 'Joe & The Juice',
            website: 'joejuice.com',
            email: 'joe@juice.com',
            bankrupt: false,
        },
        {
            orgNum: '911338066',
            navn: 'Joe & The Juice',
            website: 'joejuice.com',
            email: 'joe@juice.com',
            bankrupt: false,
        },
        {
            orgNum: '911318066',
            navn: 'Martin Gawlyta',
            website: 'joejuice.com',
            email: 'da@juice.com',
            bankrupt: true,
        },
    ],
    error: '',
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.getState();

export default store;
