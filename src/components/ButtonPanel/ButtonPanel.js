import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

const grey = {
  color: '#dfdfdf',
};

const ButtonPanel = () => (
  <>
    <div className="panel">
      <div className="group">
        <Button name="AC" color={grey} />
        <Button name="+/-" color={grey} />
        <Button name="%" color={grey} />
        <Button name="÷" />
      </div>
      <div className="group">
        <Button name="7" color={grey} />
        <Button name="8" color={grey} />
        <Button name="9" color={grey} />
        <Button name="X" />
      </div>
      <div className="group">
        <Button name="4" color={grey} />
        <Button name="5" color={grey} />
        <Button name="6" color={grey} />
        <Button name="-" />
      </div>
      <div className="group">
        <Button name="1" color={grey} />
        <Button name="2" color={grey} />
        <Button name="3" color={grey} />
        <Button name="+" />
      </div>
      <div className="group">
        <Button name="0" color={grey} wide />
        <Button name="." color={grey} />
        <Button name="=" />
      </div>
    </div>
  </>
);

export default ButtonPanel;
