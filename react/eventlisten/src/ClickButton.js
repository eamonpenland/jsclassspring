import React, { Component } from 'react';

class ClickButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      clickCount: 0,
      textVal: ''
    }
  }

  _handleClick = event => {
    let clicks = this.state.clickCount;
    console.log('INPUT', this.refs)
    this.setState({clickCount: clicks + 1})
  }

  // _handleClick(e){
  //   let clicks = this.state.clickCount;
  //   console.log('INPUT', this.refs)
  //   this.setState({clickCount: clicks + 1})
  // }

  _handleChange = e => {
    console.log(">>>>>>>>>>");
    this.setState({textVal: e.target.value + '*'})
  }

  render() {
    const { clickCount, textVal } = this.state;
    const { label } = this.props;

    return (
      <div>
        <input ref="1input" type="text" defaultValue="########" />
        <input ref="inputBox" type="text" value={textVal} />
        <button ref="button" onClick={this._handleClick}>{label}</button>
        {/* <div>{clickCount}</div> */}
      </div>
    )
  }
}

export default ClickButton
