import React, { Component } from 'react';
import Routes from './routes/index.js';
import HeaderBar from './components/HeaderBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Routes />
      </div>
    );
  }
}

export default App;
