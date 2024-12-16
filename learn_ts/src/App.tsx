// import { useState } from 'react'
import "./index.css"
import TodoItem from "./components/todoItem"
function App() {
  // const [count, setCount] = useState(0)

  return(
    <>
      <h1> Hello From TypeScript</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  )
}

export default App
