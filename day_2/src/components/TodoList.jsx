import {useState} from 'react';

function TodoList(){

   const [todo, setTodo] = useState([])
   const [newTodo, setNewTodo] = useState("")

   const handleClick = () =>{
      if (newTodo.trim() === "") return; 
      
      const todo1 = {
         id: Date.now(),
         text: newTodo
      }
      setTodo([...todo, todo1]),
      setNewTodo('');
   }

   return (
      <section>
         <input type="text"
          placeholder = "Enter Your Todo"
          value = {newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
         />

         <button onClick = {handleClick}>Add TODO</button>

         {
            todo.map(t =>
               <li key={t.id}>{t.text}</li>
            )
         }
         
      </section>
   )
}

export default TodoList;