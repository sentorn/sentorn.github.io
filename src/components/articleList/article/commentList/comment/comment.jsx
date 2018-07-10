import React from 'react';
import PropTypes from 'prop-types';
import SwitchContext from '../../../../context';
import Modal from '../../../article/modal';

class Comment extends React.Component {
  state = {
    modalIsOpen: false
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className='comment'>
        <div className='comment__title'>
          <h4>{this.props.author}</h4>
          <SwitchContext.Consumer>
            {context =>
              (context.state.visibleRemove
                ? <button className='btn' onClick={this.openModal}>remove comment</button>
                : null)
            }
          </SwitchContext.Consumer>
        </div>
        <p>{this.props.text}</p>
        {this.state.modalIsOpen && <Modal
          open={this.state.modalIsOpen}
          close={this.closeModal}
          removeElement={this.props.remove}
          name='Comment'
        />}
      </div>
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
};

export default Comment;