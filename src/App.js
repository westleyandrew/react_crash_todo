import React from 'react';
import './App.css';
import Todos from './components/Todos'

function App() {
  let state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Watch Aquaman',
        completed: false
      },
    ]
  }
  return (
    <div className="App">
      <Todos todos={state.todos} />
    </div>
  );
}

export default App;
