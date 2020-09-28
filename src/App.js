import { func } from 'prop-types';
import React from 'react';
import TodoList from './todo/TodoList.js';
import context from './context.js';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: `Купить хлеб`},
    {id: 2, completed: false, title: `Купить cыр`},
    {id: 3, completed: false, title: `Купить масло`},
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  function removeItem(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <context.Provider value={{removeItem}}>
      <div className='wrapper'>
        <h1>React Tutorial</h1>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p><b>add new todo!</b></p>}
      </div>
    </context.Provider>
  )
}

export default App;
