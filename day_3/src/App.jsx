import { useState } from 'react'
import { useEffect } from 'react';
import BasicEffect from './components/BasicEffect';
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
// import Switcher from './components/Switcher'


function App(){
  return(
    <>
      <h1>APP</h1>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </>
  )
}

// function App() {
//   // const [count, setCount] = useState(0)

//  return (
//   <>
//     <Switcher />
//   </>
//  )
// }


// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(()=>{
//     console.log('call UseEffect');
//     document.title = `${value} Increment`
//   },[value]);


//   return(
//     <div>
//       APP
//       <h2>{value}</h2>
//       <button onClick={()=> setValue(value + 1)}>Click ME</button>
//     </div>
//   )


// }

export default App
