import types from '../types/types';

export const setQueryAction = (query) => {
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

export const fetchRegisterSuccess = (results) => {
    return {
        type: types.FETCH_REGISTER_SUCCESS,
        payload: results,
    };
};
export const fetchRegisterError = (error) => {
    return {
        type: types.FETCH_REGISTER_ERROR,
        payload: error,
    };
};
