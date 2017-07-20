import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let componentCommentBox;

    beforeEach(() => {
        componentCommentBox = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(componentCommentBox).to.have.class('comment-box');
    });

    it('has a text area', ()=> {
        expect(componentCommentBox.find('textarea')).to.exist;
    });

    it('has a button', ()=> {
        expect(componentCommentBox.find('button')).to.exist
    });

    describe('entering some text', () => {

        beforeEach(() => {
            componentCommentBox.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the textarea', () => {
            expect(componentCommentBox.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            componentCommentBox.simulate('submit');

            expect(componentCommentBox.find('textarea')).to.have.value('');
        });
    });
})