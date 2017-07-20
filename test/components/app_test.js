import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let componentCommentBox;

  beforeEach(() => {
    componentCommentBox = renderComponent(App);
  })

  it('shows a comment box', () => {
    expect(componentCommentBox.find('.comment-box')).to.exist;
  })

  it('shows a comment list', () => {
    expect(componentCommentBox.find('.comment-list')).to.exist;
  })
});