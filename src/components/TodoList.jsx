function TodoList({todos, deleteTodo}) {
  return <section>
    <h2>TO DO LIST:</h2>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.task} <button onClick={() => deleteTodo(todo.id)}>DELETE</button></li>)}
    </ul>
  </section>
}

export default TodoList