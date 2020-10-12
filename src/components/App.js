import React, {Component} from 'react';
import '../App.css';
import Display from '../components/Display';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel'

class App extends Component{


  render(){
    return(
      <div className='App'>
       <h3>Calculator App</h3>
        <Display calculation='hello'/>
        <Button  buttonName = 'click'/>
        <ButtonPanel/>
      </div>

    )
  }
}



export default App;
