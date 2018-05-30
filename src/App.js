import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import TextItem from './components/TextItem/TextItem';
import styles from './App.css';
import colors from './Colors.css';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <Navigation />
        </header>
        <div className="content">
          <TextItem iconColor={colors.red}/>
          <TextItem iconColor={colors.green}/>
          <TextItem iconColor={colors.blue}/>
        </div>
      </div>
    );
  }
}

export default App;
