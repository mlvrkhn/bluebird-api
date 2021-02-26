import types from '../types/types';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            console.log('SET_QUERY');
            return {
                ...state,
                query: action.payload,
            };
        case 'ADD_RECORD':
            console.log('ADD_RECORD');
            return state;
        default:
            return state;
    }
};

export default reducer;
