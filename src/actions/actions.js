import types from '../types/types';
import BrregAPI from '../api/api';

export const setQuery = (query) => {
    return {
        type: types.SET_QUERY,
        payload: query,
    };
};

export const fetchRegisterPending = () => {
    return {
        type: types.FETCH_REGISTER_PENDING,
    };
};

export const fetchRegisterError = (error) => {
    return {
        type: types.FETCH_REGISTER_ERROR,
        payload: error,
    };
};

export const saveResultsToStore = (results) => {
    return {
        type: types.SAVE_RESULTS_TO_STORE,
        payload: results,
    };
};

export const fetchRegisterSuccess = () => {
    return {
        type: types.FETCH_REGISTER_SUCCESS,
    };
};

export const getDataFromRegister = () => (dispatch, getState) => {
    const api = new BrregAPI();
    const state = getState();

    dispatch(fetchRegisterPending());
    api.getRegister(state.query).then((response) => {
        const { _embedded: enheter } = response;
        dispatch(saveResultsToStore(enheter));
        dispatch(fetchRegisterSuccess());
    });
};

// return fetch(url)
//     .then((resp) => {
//         if (resp.ok) {
//             return resp.json();
//         }
//         throw new Error('Err!');
//     })
//     .then((resp) => dispatch(setIP(resp.ip)))
//     .catch((err) => dispatch(addError(err)));

// function getDataFromRegister() {
//     return (dispatch) => {
//         dispatch(fetchProductsPending());
//         fetch('https://exampleapi.com/products')
//             .then((res) => res.json())
//             .then((res) => {
//                 if (res.error) {
//                     throw res.error;
//                 }
//                 dispatch(fetchRegisterSuccess());
//                 dispatch(saveResultsToStore(res));
//             })
//             .catch((error) => {
//                 dispatch(fetchRegisterError());
//             });
//     };
// }
