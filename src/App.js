import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';

class App extends Component {
  state = {
    data1: 'manusia',
    data2: 'Hewan',
    data3: 'Tumbuhan'
  };
  render() {
    return (
      <div>
        <h1>Ini App JS</h1>
        <Component1 pertama={this.state.data1} kedua={this.state.data2} />
      </div>
    );
  }
}

export default App;
