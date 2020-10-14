import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';
import buttonGroup from '../ButtonGroup/ButtonGroup';

const ButtonPanel = () => (
  <div className="panel">
    <div className="group">
      {buttonGroup.map((button, i) => (button.name === '0'
        ? <Button key={i} name={button.name} wide color="#dfdfdf" />
        : (button.name === '+' || button.name === '-'
          || button.name === '=' || button.name === 'X'
          || button.name === '÷')
          ? <Button key={i} name={button.name} />
          : <Button key={i} name={button.name} color="#dfdfdf" />))}
    </div>
  </div>
);

export default ButtonPanel;
