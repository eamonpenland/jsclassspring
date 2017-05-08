import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageInput from './MessageInput.js';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: "My state message",
      name: 'Eamon',
      siblings: [{id: 0, name: 'eamon'}, {id: 1, name: 'eoin'}],
      clicked: false
    }
  }

  handleSiblings = (arrOfSiblings) => {
    return arrOfSiblings.map((sibling, i) => {
      let s = sibling;
      return <li key={s.id}>{s.name}</li>
    })
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }


  render() {

    const active = {
      color: 'red'
    }

    const inactive = {
      color: 'green'
    }

    const { pageTitle } = this.props;
    const { siblings, clicked } = this.state;

    const renderSiblings = this.handleSiblings(siblings);

    const stateMessage = `Eamon said, "${this.state.message}"`

    const stateName = this.state.name ? `Hello ${this.state.name}` : 'That property doesnt exist';

    const clickedStyle = clicked ? active : inactive;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={clickedStyle} onClick={this.handleClick}>{pageTitle}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {stateMessage}
        </p>
        <p>
          {stateName}
        </p>
        <ul>
          {renderSiblings}
        </ul>
        <MessageInput
          label="First Message Input"
          clickFunction={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
