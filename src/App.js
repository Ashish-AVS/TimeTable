import React, { Component } from 'react';
import Table from './Table/Table';
import DropDown from './DropDown/DropDown';
import Switch from "./Switch/Switch";

class App extends Component {
  state = {
    display: false
  }

  render() {
    
    return(
      <div>
        <div className="switch"><Switch /></div>
        <h1 id="head">TIME TABLE</h1> 
        <Table display="Light"/>
      </div>
    );
  }
}

export default App;
