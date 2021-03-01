import types from './types';

const initialState = {
    query: '',
    visible: false,
    pending: false,
    results: [],
    fetchSuccess: false,
    coursorOffsetY: '0',
    previewData: {
        organisasjonsnummer: '',
        konkurs: '',
        antallAnsatte: '',
        navn: '',
    },
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
                pending: false,
                results: action.payload,
            };
        case types.FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                fetchSuccess: true,
            };
        case types.CLEAR_ERRORS:
            return {
                ...state,
                error: '',
            };
        case types.DISPLAY_DETAILED_INFO:
            return {
                ...state,
                visible: true,
                previewData: action.payload[0],
                coursorOffsetY: action.payload[1],
            };
        case types.HIDE_DETAILED_INFO:
            return {
                ...state,
                visible: false,
            };
        case types.FETCH_REGISTER_ERROR:
            return {
                ...state,
                pending: false,
                query: '',
                results: [],
                error: action.payload.message,
            };
        default:
            return state;
    }
};

export default reducer;
