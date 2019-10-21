import {
    TEXT_SCANNED
} from './types';

export const textScanned = (text) => {
    return (dispatch) => {
        var arrayLength = text.length;
        for (var i = 0; i < arrayLength; i++) {
            if (text[i].value.length > 11) {
                dispatch({
                    type: TEXT_SCANNED,
                    payload: text[i].value
                });
            }
        }
    }
};