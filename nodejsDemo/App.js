import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  render() {
      return <div>
          <List arr={[12, 45, 0, 1]}></List>
      </div>;
  }
}

export default App;
