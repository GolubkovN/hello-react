import React from 'react';
import TodoList from './todo/TodoList.js';
function App() {
  const todos = [
    {id: 1, completed: false, title: `Купить хлеб`},
    {id: 2, completed: false, title: `Купить cыр`},
    {id: 3, completed: false, title: `Купить масло`},
  ];

  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>

      <TodoList todos={todos} />
    </div>
  )
}

export default App;
