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

export const clearErrors = () => {
    return {
        type: types.CLEAR_ERRORS,
    };
};

export const displayDetailedInfo = (e, data) => {
    const mousePosition = [e.clientX + 'px', e.clientY + 'px'];
    return {
        type: types.DISPLAY_DETAILED_INFO,
        payload: [data, mousePosition],
    };
};

export const hideDetailedInfo = () => {
    return {
        type: types.HIDE_DETAILED_INFO,
        visible: false,
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
            dispatch(fetchRegisterError(err));
        });
};
