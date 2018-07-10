import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import Button from '../button';

class CommentList extends React.Component {
  state = {
    commentList: this.props.comments,
    commentOpen: false
  };
  commentClick = () => {
    this.setState({
      commentOpen: !this.state.commentOpen
    });
  };
  removeItem = (id) => {
    this.setState({ commentList: this.state.commentList.filter(comment => id !== comment.id) });
  };
  render() {
    const comments = (
      this.state.commentOpen && (
        this.state.commentList.map(comment => (
          <Comment
            key={comment.id}
            text={comment.text}
            author={comment.author}
            remove={this.removeItem.bind(this, comment.id)}
          />
        ))
      ));
    return (
      <div className='comments'>
        <div className='comments__title'>
          <h2>Comments <span>{`(${this.state.commentList.length})`}</span></h2>
          <Button
            nameOfClass='btn'
            contentClick={this.commentClick}
            text={this.state.commentOpen ? 'close comments' : 'open comments'}
          />
        </div>
        {comments}
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
