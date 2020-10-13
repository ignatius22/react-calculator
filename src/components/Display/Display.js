import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ result }) => (
  <div className="display">
    <h6>{result}</h6>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
