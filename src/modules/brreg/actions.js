import types from './types';
import BrregAPI from './api';

export const setQuery = (query) => {
    return {
        type: types.SET_QUERY,
        payload: query,
    };
};

export const saveResultsToStore = (results) => {
    return {
        type: types.SAVE_RESULTS_TO_STORE,
        payload: results,
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

export const fetchRegisterSuccess = () => {
    return {
        type: types.FETCH_REGISTER_SUCCESS,
    };
};

export const getDataFromRegister = () => (dispatch, getState) => {
    const api = new BrregAPI();
    const state = getState();

    dispatch(fetchRegisterPending());

    api.getRegister(state.query)
        .then((resp) => {
            const {
                _embedded: { enheter },
            } = resp;
            dispatch(saveResultsToStore(enheter));
            dispatch(fetchRegisterSuccess());
        })
        .catch((err) => {
            console.log('🚀 ~ getDataFromRegister ~ err', err);
            dispatch(fetchRegisterError(err));
        });
};
