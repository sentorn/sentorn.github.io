import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => <p>{props.text}</p>;

Comment.propTypes = {
  text: PropTypes.string.isRequired
};

export default Comment;