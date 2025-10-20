import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [todoList, setTodoList] = useLocalStorage('todos', [])

  return (
    <>
      <h1>Task list</h1>
      <ul>
        {todoList.map(todo => <li key={todo.id}><Link to={`/todo/${todo.id}`}>{todo.task}</Link></li>)}
      </ul>
    </>
  )
}

export default Home