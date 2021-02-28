import types from './types';

const initialState = {
    query: '',
    pending: true,
    results: [],
    errors: '',
};

const reducer = (state = initialState, action) => {
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
        case types.SAVE_RESULTS_TO_STORE:
            return {
                ...state,
                results: action.payload.enheter,
            };
        case types.FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                fetchSuccess: true,
                pending: false,
            };
        case types.FETCH_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        default:
            return state;
    }
};

export default reducer;
