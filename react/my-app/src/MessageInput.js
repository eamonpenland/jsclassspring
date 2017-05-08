import React, { Component } from 'react';

class MessageInput extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <label>{this.props.label}</label>
        <input />
        <button onClick={this.props.clickFunction}>Send</button>
      </div>
    )
  }
}


export default MessageInput
