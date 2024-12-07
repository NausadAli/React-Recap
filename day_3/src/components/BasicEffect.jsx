import React, { useEffect } from 'react'

function BasicEffect() {

   useEffect(() => {
      setTimeout(() => {
        console.log("Render the Use Effect");
      }, 800);
    }); // No dependency array - runs after every render
    

  return (
    <div>
      Basic Effect
    </div>
  )
}

export default BasicEffect
