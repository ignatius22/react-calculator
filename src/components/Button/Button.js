import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name, color, wide }) => (
  <button
    className={wide ? 'wide' : 'normal'}
    type="button"
    style={{ backgroundColor: color }}
  >
    {name}

  </button>

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: '#fe9241',
};

export default Button;
