import React from 'react';
import PropTypes from 'prop-types';
import SwitchContext from '../../../../context';

const Comment = props => (
  <div className='comment'>
    <div className='comment__title'>
      <h4>{props.author}</h4>
      <SwitchContext.Consumer>
        { context =>
          (context.state.visibleRemove
            ? <button className='btn' onClick={props.modalFunc}>remove comment</button>
            : null)
        }
      </SwitchContext.Consumer>
    </div>
    <p>{props.text}</p>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  modalFunc: PropTypes.func.isRequired
};

export default Comment;