import { SAVE_COMMENT, REMOVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload];
        case REMOVE_COMMENT:
            return state.filter((i) => {
                return i != action.payload
            });
        default: 
            return state;
    }
}