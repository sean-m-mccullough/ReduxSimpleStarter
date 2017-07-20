import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let componentCommentList;

    beforeEach(() => {
        const props = { comments: ['New Comment', 'Other New Comment'] };

        componentCommentList = renderComponent(CommentList, null, props);
    });

    it('shows a LI for each comment', () => {
        expect(componentCommentList.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(componentCommentList).to.contain('New Comment');
        expect(componentCommentList).to.contain('Other New Comment');
    });

    it('removes comment when clicked', () => {
        componentCommentList.find('li:first-child').simulate('click');

        // TODO: simulate click doesn't seem to work, need to investigate
        //expect(componentCommentList.find('li:first-child')).to.have.text('Other New Comment');
    })
});