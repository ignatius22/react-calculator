import React, {Component} from 'react';
import Display from '../components/Display';




class App extends Component{


  render(){
    return(
      <div>
       <h3>Class components with calc</h3>
      <Display calculation='hello'/>
      </div>

    )
  }
}



export default App;
