import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button className={props.nameOfClass} onClick={props.contentClick}>
    {props.text}
  </button>
);

Button.propTypes = {
  contentClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  nameOfClass: PropTypes.string.isRequired
};

export default Button;