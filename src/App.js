import React, { Component } from 'react';
import Table from './Table/Table';
import DropDown from './DropDown/DropDown';

class App extends Component {
  render() {
    return(
      <div>
        <DropDown />
        <Table />
      </div>
    );
  }
}

export default App;