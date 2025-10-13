import { useState } from 'react'

function TodoInput({addTodo}) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.trim()) {
      addTodo(input)
    }

    setInput('')
  }

  return <>
    <section>
      <h2>ADD TO DO LIST</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button>ADD</button>
      </form>
    </section>
  </>
}

export default TodoInput