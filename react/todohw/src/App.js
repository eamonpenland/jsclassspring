import React, { Component } from 'react';
import TodosList from './todoslist.js';
import Filters from './filters.js';
import TodoSubmit from './TodoSubmit.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTodoInput: '',
      filter: 'active',
      editingTodo: null,
      todos: [{
        id: 0,
        desc: 'Create React App',
        status: 'active',
        edited: false,
      },{
        id: 1,
        desc: 'Create State',
        status: 'active',
        edited: false,
      },{
        id: 2,
        desc: 'Create Components',
        status: 'active',
        edited: false,
      }]
    }
  }

  addNewTodo = desc => {
    let todos = this.state.todos;

    const newTodo = {
      id: todos.length + 1,
      desc: desc,
      status: 'active',
      edited: false,
    };

    todos = todos.concat([newTodo])
    this.setState({
      todos: todos,
      newTodoInput: ''
    })
  }

  editTodo = todoObj => {
    this.setState({editingTodo: todoObj});
    this.changeTodoVal(todoObj.desc);
  }

  changeTodoVal = newVal => {
    this.setState({newTodoInput: newVal})
  }

  updateTodo = () => {
    let id = this.state.editingTodo.id;
    let todos = this.state.todos;
    let newDesc = this.state.newTodoInput;
    let index = todos.map(todo => todo.id).indexOf(id);

    todos[index].desc = newDesc;
    todos[index].edited = true;
    this.setState({
      todos: todos,
      editingTodo: null,
      newTodoInput: ''
    })
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter
    })
  }

  changeStatus = id => {
    let index = this.state.todos.map(todo => todo.id).indexOf(id);
    let newTodos = this.state.todos;
    let newStatus = newTodos[index].status === 'active' ? 'complete' : 'active';
    newTodos[index].status = newStatus;

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos, filter, newTodoInput, editingTodo } = this.state;
    const filterOptions = ['active', 'complete'];

    return (
      <div className="App">
        <TodosList
          todos={todos}
          activeFilter={filter}
          changeStatus={this.changeStatus}
          editTodo={this.editTodo}
        />
        <Filters
          filterOptions={filterOptions}
          activeFilter={filter}
          changeFilter={this.changeFilter}
        />
        <TodoSubmit
          newTodoInput={newTodoInput}
          editingTodo={editingTodo}
          changeTodoVal={this.changeTodoVal}
          addNewTodo={this.addNewTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

export default App;
