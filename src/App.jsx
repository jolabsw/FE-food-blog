import { useCallback, useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'

import './App.css'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [todoList, setTodoList] = useLocalStorage('todos', []);

  const addTodo = (task) => {
    setTodoList([...todoList, {id: Date.now(), task}])
  }

  const deleteTodo = useCallback((id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }, [])

  return (
    <>
      <h1>Simple TO DO List</h1>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todoList} deleteTodo={deleteTodo} />      
    </>
  )
}

export default App
