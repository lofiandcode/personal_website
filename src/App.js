import React, { Component, Fragment } from 'react';
import './App.css';
import HomeView from './views/HomeView'

class App extends Component {
  render() {
    return (
      <Fragment>
        <HomeView />
      </Fragment>
    );  
  }
}

export default App;
