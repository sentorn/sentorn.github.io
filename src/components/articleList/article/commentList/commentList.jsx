import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import Modal from '../modal';

class CommentList extends React.Component {
  state = {
    modalIsOpen: false,
    commentList: this.props.comments
  };
  openModal = () => {
    // this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  removeClick = () => {
    // here we need to remove list item by id
  };
  render() {
    return (
      <React.Fragment>
        <Modal
          open={this.state.modalIsOpen}
          close={this.closeModal}
          removeElement={this.removeClick}
          name='Comment'
        />
        {
          this.state.commentList.map(comment =>
            (<Comment
              key={comment.id}
              text={comment.text}
              author={comment.author}
              modalFunc={this.openModal}
            />))
        }
      </React.Fragment>

    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
