import types from '../types/types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_QUERY:
            console.log('SET_QUERY');
            return state;
        case types.ADD_RECORD:
            console.log('ADD_RECORD');
            return state;
        default:
            return state;
    }
};

export default reducer;
