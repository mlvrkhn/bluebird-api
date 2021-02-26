import types from '../types/types';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case types.SET_QUERY:
            console.log('SET_QUERY');
            return {
                ...state,
                query: payload,
            };
        case types.ADD_RECORD:
            console.log('ADD_RECORD');
            return state;
        default:
            return state;
    }
};

export default reducer;
