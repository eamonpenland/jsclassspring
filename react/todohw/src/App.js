import React, { Component } from 'react';
import TodosList from './todoslist.js';
import Filters from './filters.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      filter: 'active',
      todos: [{
        id: 0,
        desc: 'Create React App',
        status: 'active'
      },{
        id: 1,
        desc: 'Create State',
        status: 'active'
      },{
        id: 2,
        desc: 'Create Components',
        status: 'active'
      }]
    }
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
    const { todos, filter } = this.state;
    const filterOptions = ['active', 'complete'];

    return (
      <div className="App">
        <TodosList
          todos={todos}
          activeFilter={filter}
          changeStatus={this.changeStatus}
        />
        <Filters
          filterOptions={filterOptions}
          activeFilter={filter}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}

export default App;
