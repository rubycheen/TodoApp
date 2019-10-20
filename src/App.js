import React from 'react';
import Todos form './todos';

function App() {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id:2 content: 'play Mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter (todo => {
       return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className = "h1.center.blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
