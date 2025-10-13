import { useState } from 'react'
import TodoInput from './components/TodoInput'

import './App.css'
import TodoList from './components/TodoList'

function App() {
  // Create a simple to do list
  // Ensure to add ADD TODO and DELETE TODO
  const [todos, setTodos] = useState([])

  const addTodo = (task) => {
    setTodos([...todos, {id: Date.now(), task}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1>Simple TO DO List</h1>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />      
    </>
  )
}

export default App
