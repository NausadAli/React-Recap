import { useEffect, useState } from 'react'

function FetchDataEffect() {
   const [todo, setTodo] = useState([])

   useEffect(()=>{
      async function getData() {
         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await res.json();
         console.log(data)
      }

      getData();
   },[])

  return (
    <div>
      <p>DATA</p>
      {/* <h2>{todo.map(i =>
         <li key = {i.id}>{i.title}</li>
      )}</h2> */}
      {todo.length > 0 ? <p> <strong>First Title :</strong> {todo[0].title}</p> : <p>...Loading</p>}
    </div>
  )
}

export default FetchDataEffect
