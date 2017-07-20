import { expect } from '../test_helper';
import { SAVE_COMMENT, REMOVE_COMMENT } from '../../src/actions/types';
import { saveComment, removeComment } from '../../src/actions';

describe('Actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('New Comment');
            expect(action.payload).to.equal('New Comment')
        });
    });

    describe('removeComment', () => {
        it('has the correct type', () => {
            const action = removeComment();
            expect(action.type).to.equal(REMOVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = removeComment('New Comment');
            expect(action.payload).to.equal('New Comment');
        });
    });
});