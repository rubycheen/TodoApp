import React from 'react';
import Todos form './todos';

function App() {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id:2 content: 'play Mario kart'}
    ]
  }

  return (
    <div className="todo-app container">
      <h1 className = "h1.center.blue-text">Todo's</h1>
      <Todos todos = {this.state.todos}>
    </div>
  );
}

export default App;
