import React, { Component } from 'react';
import Navigation from './components/Navigation';
import TextItem from './components/TextItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="content">
          <TextItem iconColor="red"/>
          <TextItem iconColor="green"/>
          <TextItem iconColor="blue"/>
        </div>
      </div>
    );
  }
}

export default App;
