import React from 'react'
import { useState, useEffect } from 'react';

function CounterEffect() {
   const [value, setValue] = useState(0);

   useEffect(() => {
      console.log("Use Effect");
      document.title = `${value} Increment `
   }, [value])
   

  return (
    <div>
      <p onClick={()=> setValue(value+1)}>{value}</p>
   
    </div>
  )
}

export default CounterEffect
