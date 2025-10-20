import { useParams } from "react-router-dom"

function TodoDetails() {
  const {todoId} = useParams()
  return (
    <>
      <h1>Current ID: {todoId}</h1>
    </>
  )
}

export default TodoDetails