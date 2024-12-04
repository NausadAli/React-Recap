import React from 'react'

function Greeting({timeOfDay}) {


   return timeOfDay==="morning" ? <p>Good morning</p> : <p>Good Afternoon</p>
}
export default Greeting
