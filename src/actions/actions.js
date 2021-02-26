import types from '../types/types';

export const setQueryAction = (query) => {
    console.log('🚀 ~ setQueryAction ', query);
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

export const fetchRegisterSuccess = (records) => {
    return {
        type: types.FETCH_REGISTER_SUCCESS,
        records: records,
    };
};
export const fetchRegisterFailure = (error) => {
    return {
        type: types.FETCH_REGISTER_ERROR,
        error: error,
    };
};
