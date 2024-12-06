// import React from 'react'
import { useState } from 'react'

function Example() {

   const [name, setName] = useState(()=>{
      const savedName = localStorage.getItem("name")
      return savedName? JSON.parse(savedName) : "";
   })

   const handleClear = () => {
      setName('')
   }

   const handleChange = (event) =>{
      setName(event.target.value)
   }


  return (
    <div>
         <h1>Your name: {name}</h1>
         <input type="text"
         value={name}
         onChange={handleChange}
         placeholder='Enter Your Name' />

         <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default Example
