// import React from 'react'

function Weather({temperature}) {
  
   {if(temperature >= 25)
     {
      return( <p>It is Hot outside</p>)
     }
     else if(temperature >=15 && temperature < 25){
       return (<p>Its nice outside</p>)
     }
     else{
       return (<p>COLD</p>)
     }
   }

}

export default Weather
