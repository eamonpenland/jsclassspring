import React, { Component } from 'react';

class TodoSubmit extends Component {
  _handleButtonPress = () => {
    const {editingTodo, updateTodo, addNewTodo, newTodoInput} = this.props;

    editingTodo ? updateTodo() : addNewTodo(newTodoInput)
  }
  render() {
    const { newTodoInput, changeTodoVal } = this.props;

    return (
      <div>
        <input value={newTodoInput} onChange={(e) => changeTodoVal(e.target.value)}/>
        <button onClick={this._handleButtonPress}>Submit</button>
      </div>
    )
  }
}


export default TodoSubmit;
