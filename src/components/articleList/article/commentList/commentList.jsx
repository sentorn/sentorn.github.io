import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

const CommentList = (props) => {
  const commentList = props.comments;
  return (
    <div className='comments__content'>
      {
        commentList.map(comment => <Comment key={comment.id} text={comment.text} />)
      }
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
