// import React from 'react'

import { useState } from "react";

function ShoppingList() {
   const [cart,setCart] = useState([]);
   const [name,setName] = useState('');
   const [quantity,setQuantity] = useState('');

   const handleChange = ()=>{
      if(name.trim() == "" || quantity.trim() == "") return;

      const newItem = {
         name,
         quantity: parseInt(quantity)
      }

      setCart(prev => [...prev, newItem])
      setName('');
      setQuantity('');
   }


  return (
    <div>
      <input type="text" name="name" 
         value = {name}
         onChange = {e => setName(e.target.value)}
      />
      <input type="number" name="value" 
         value = {quantity}
         onChange = {e => setQuantity(e.target.value)}
      />
      <button onClick={handleChange}>Add Item</button>


      

      <ul>
         {cart.map((item, index) =>
            (
               <li key = {index}>{item.name} : {item.quantity}</li>
            )
         )}
      </ul>

    </div>
  )
}

export default ShoppingList
