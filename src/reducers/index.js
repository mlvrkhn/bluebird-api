import types from '../types/types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case types.FETCH_REGISTER_PENDING:
            return {
                ...state,
                pending: !state.pending,
            };
        case types.FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                results: [action.payload],
            };
        case types.FETCH_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
