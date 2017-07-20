import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT, REMOVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'New Comment' };
        expect(commentReducer([], action)).to.eql(['New Comment']);
    });

    it('handles action of type REMOVE_COMMENT', () => {
        const actionSaveComment = { type: SAVE_COMMENT, payload: 'New Comment' };
        const actionRemoveComment = { type: REMOVE_COMMENT, payload: 'New Comment' };
        commentReducer([], actionSaveComment);
        
        expect(commentReducer([], actionRemoveComment)).to.eql([]);
    })
});