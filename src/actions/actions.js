import types from '../types/types';

export const setQuery = (query) => {
    return {
        type: types.SET_QUERY,
        payload: query,
    };
};

export const fetchRegisterPending = () => {
    console.log('heh');
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

export const getDataFromRegister = () => (dispatch, getState) => {
    dispatch(fetchRegisterPending);
    // return fetch(url)
    //     .then((resp) => {
    //         if (resp.ok) {
    //             return resp.json();
    //         }
    //         throw new Error('Err!');
    //     })
    //     .then((resp) => dispatch(setIP(resp.ip)))
    //     .catch((err) => dispatch(addError(err)));
};
