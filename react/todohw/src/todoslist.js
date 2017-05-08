import React, { Component } from 'react';

class TodosList extends Component {

  _handleTodos = (todos, activeFilter, changeStatus) => {
    return todos.filter(todo => {
      return todo.status === activeFilter;
    }).map((todo, i) => {
      return <li onClick={() => changeStatus(todo.id)} key={i}>{todo.desc}</li>
    })
  }

  render() {
    const { todos, activeFilter, changeStatus } = this.props;
    const renderTodos = this._handleTodos(todos, activeFilter, changeStatus);

    return (
      <div>
        {renderTodos}
      </div>
    )
  }
}

export default TodosList
