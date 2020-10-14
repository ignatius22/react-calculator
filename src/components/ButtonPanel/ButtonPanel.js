import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';


const buttonArray = [
    {name: 'AC'},
    {name: '+/-'},
    {name: '%'},
    {name: '÷'},
    {name: '7'},
    {name: '8'},
    {name: '9'},
    {name: 'X'},
    {name: '4'},
    {name: '5'},
    {name: '6'},
    {name: '-'},
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '+'},
    {name: '0'},
    {name: '.'},
    {name: '='},

]




const ButtonPanel = () => (
  <>
    <div className="panel">
      <div className="group">

      {buttonArray.map((button,i) => (button.name === '0') ?
      <Button key={i} name={button.name} wide color='#dfdfdf' />:
      (button.name === '+' || button.name === '-' ||
       button.name === '=' || button.name === 'X' ||
       button.name === '÷' )
       ? <Button key={i} name={button.name} />:
      <Button key={i} name={button.name}  color='#dfdfdf' />  )}
      </div>
    </div>
  </>
);

export default ButtonPanel;
