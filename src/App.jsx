import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useCallback } from 'react'
import TodoInput from './components/TodoInput'

import './App.css'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'
import Home from './pages/Home'
import TodoDetails from './pages/TodoDetails'

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo/:todoId' element={<TodoDetails />} />
        </Routes>
      </BrowserRouter>
      <h1>Simple TO DO List</h1>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todoList} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
