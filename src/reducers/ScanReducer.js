import {
    TEXT_SCANNED
} from '../actions/types';

const INITIAL_STATE = {
    text: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_SCANNED:
            return { ...state, text: action.payload };
        default:
            return state;
    }
};