import types from '../types/types';

export const setQueryAction = (query) => {
    console.log('🚀 ~ setQueryAction ', query);
    return {
        type: types.SET_QUERY,
        payload: query,
    };
};
