import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../actions';

class CommentList extends Component {

    handleClick(event) {
        const comment = event.target.innerText || event.target.textContent;
        this.props.removeComment(comment);
    }

    createList(){
        return (
            this.props.comments.map(comment => <li key={comment} onClick={this.handleClick.bind(this)}>{comment}</li>)
        );
    }

    render() {
        return (
            <ul className="comment-list">
                {this.createList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps, { removeComment })(CommentList);