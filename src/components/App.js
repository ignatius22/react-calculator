import React, {Component} from 'react';
import '../App.css'
import Display from '../components/Display';
import Button from '../components/Button'

class App extends Component{


  render(){
    return(
      <div className='App'>
       <h3>Class components with calc</h3>
      <Display calculation='hello'/>
      <Button  buttonName = 'click'/>
      </div>

    )
  }
}



export default App;
