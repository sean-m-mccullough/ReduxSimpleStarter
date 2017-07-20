import { SAVE_COMMENT, REMOVE_COMMENT } from './types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function removeComment(comment) {
    return {
        type: REMOVE_COMMENT,
        payload: comment
    };
}