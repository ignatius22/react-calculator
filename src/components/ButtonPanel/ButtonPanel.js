import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import buttonGroup from '../ButtonGroup/ButtonGroup';

const ButtonPanel = ({ clickHandler }) => (
  <div className="panel">
    <div className="group">
      {buttonGroup.map(button => (button.name === '0'
        ? <Button key={button.id} name={button.name} wide color="#dfdfdf" clickHandler={clickHandler} />
        : (button.name === '+' || button.name === '-'
          || button.name === '=' || button.name === 'x'
          || button.name === '÷')
          ? <Button key={button.id} name={button.name} clickHandler={clickHandler} />
          : <Button key={button.id} name={button.name} color="#dfdfdf" clickHandler={clickHandler} />))}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
