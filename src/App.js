import React, { Component } from 'react';
import Table from './Table/Table';
import DropDown from './DropDown/DropDown';

class App extends Component {
  state = {
    display: false
  }
  render() {
    
    return(
      <div>
        <DropDown />
        <h1 id="head">TIME TABLE</h1>
        <Table display="Light"/>
        <ul style={{color:"aliceblue", textAlign: "center", padding: "10px",marginTop:"50px", backgroundColor:"#343434"}}>
          <h3>IMPROVEMENTS PENDING..</h3>
          <li>NodeJs</li>
          <li>MongoDB</li>
          <li>Advanced CSS AND SASS</li>
          <li>FireBase</li>
          <li>NOVALDOCOD</li>
        </ul>
      </div>
    );
  }
}

export default App;