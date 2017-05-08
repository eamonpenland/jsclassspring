import React, { Component } from 'react';
import ClickButton from './ClickButton.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickButton label={'Increment Me!'}/>
      </div>
    );
  }
}

export default App;
