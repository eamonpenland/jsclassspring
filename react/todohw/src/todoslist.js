import React, { Component } from 'react';

class TodosList extends Component {
  _handleTodos = (todos, activeFilter, changeStatus, editTodo) => {
    return todos.filter(todo => {
      return todo.status === activeFilter;
    }).map((todo, i) => {
      const editedStyle = todo.edited ? 'orange' : 'black';

      return (
        <div key={i} style={{color: editedStyle}}>
          <li
            onClick={() => changeStatus(todo.id)}
            >
              {todo.desc}
          </li>
          <span onClick={() => editTodo(todo)}>Edit</span>
        </div>
      )
    })
  }

  render() {
    const { todos, activeFilter, changeStatus, editTodo } = this.props;
    const renderTodos = this._handleTodos(todos, activeFilter, changeStatus, editTodo);

    return (
      <div>
        {renderTodos}
      </div>
    )
  }
}

export default TodosList
