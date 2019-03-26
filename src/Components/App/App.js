import React, { Component } from 'react';
import './App.css';
import Gifs from './Gifs';
import Title from './Title';

class App extends Component {

  render() {
    return (
      <div className="main">
        <Title title="Random mood generator"/>
        <Gifs />
      </div>
    );
  }
}

export default App;
