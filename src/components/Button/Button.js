import React from 'react';
import PropTypes from 'prop-types';
import '../Button/Button.css'


const Button = ({ name }) => (
  <button className='button' type="button">{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
