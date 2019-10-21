import React from 'react';
import Todos from './todos';
import AddForm from './AddForm '

function App() {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id:2, content: 'play Mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter (todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo =(id) => {
    todo.id = Math.random();
    let todos = {...this.state.todos};
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
