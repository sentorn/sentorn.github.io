import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../button';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    border: 'none',
    boxShadow: '0 10px 20px 0 rgba(0,0,0,.3)'
  }
};

Modal.setAppElement(document.getElementById('root'));

const ModalWindow = props => (
  <Modal
    isOpen={props.open}
    onRequestClose={props.close}
    style={modalStyles}
    contentLabel="Example Modal"
  >
    <h3>Are you sure, you want to remove this {props.name}?</h3>
    <Button contentClick={props.removeElement} text='Remove' nameOfClass='btn btn_modal' />
  </Modal>
);

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  removeElement: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ModalWindow;