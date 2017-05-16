import React from 'react';

const TodoSubmit = ({editingTodo, updateTodo, addNewTodo, newTodoInput, changeTodoVal}) => (
  <div>
    <input value={newTodoInput} onChange={(e) => changeTodoVal(e.target.value)}/>
    <button onClick={() => editingTodo ? updateTodo() : addNewTodo(newTodoInput)}>Submit</button>
  </div>
)

export default TodoSubmit;
