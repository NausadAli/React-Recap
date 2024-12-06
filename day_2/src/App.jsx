// import { useState } from 'react';
// import Example from './components/Example';
// import ComponentOne from './components/ComponentOne';
// import ComponentTwo from './components/ComponentTwo';
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <>
      <Counter />
      <p>Hello</p>
      <TodoList />
      <hr />
      <Profile/>

      <ShoppingList/>
    </>

  )
}


// function App() {
//   const [randomNumber, setRandomNumber] = useState(()=> 
//     Math.floor(Math.random() * 100)
//   );

//   const generateNewRandomNumber = () =>{

//     const newRandom = Math.floor(Math.random()*1000);
//     setRandomNumber(newRandom)
//   }

//   return (
//     <>
//       <h2>Random Number: {randomNumber}</h2>
//       <button onClick = {generateNewRandomNumber}>Example</button>

//       <Example />
//     </>
//   )
// }



// function App() {
//   const[count, setCount] = useState(0);

//   return (
//     <>
//     <ComponentOne count={count} onClickHandler = {()=> setCount(count+1)} />
//     <ComponentTwo count={count}  onClickHandler = {()=> setCount(count-1)} />    
//     </>
//   )
// }

// function App() {
//   // const [count, setCount] = useState(0)

//   // const increment = ()=>{
//   //   setCount(count+1)
//   // }
//   // const decrement = ()=>{
//   //   setCount(count-1)
//   // }


//   const [friends, setFriends] = useState(['John', 'Alex']);

//   const addFriend = ()=> setFriends([...friends, 'Nousad Ali'])
//   const removeFriend = ()=> setFriends(friends.filter(f=> f!== 'Nousad Ali'))
  
//   const updateFriend = ()=> setFriends(friends.map(f => f=='Nousad Ali'? 'Nousad' : f))
//   return (
//     <>
//       {friends.map(f => (
//         <ul key={Math.random()}>
//           <li>{f}</li>
//         </ul>
//       ))}

//       <button onClick={addFriend}>Add New Friend</button>
//       <button onClick={removeFriend}>Remove Friend</button>
//       <button onClick={updateFriend}>Update Friend</button>





//       {/* <p>{count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button> */}
//     </>
//   )

// }


// function App(){
//   const [movie, setMovie] = useState({
//     title: "Dr. Strange",
//     rating: 9
//   });


//   const handleChange = ()=>{
//     // const copyMovie = {...movie, rating: 9.8}

//     // console.log(copyMovie)
//     setMovie({...movie, rating: 8.8})
//   }

//   return (
//     <>
//       <h1>{movie.title}</h1>
//       <h1>{movie.rating}</h1>


//       <button onClick={handleChange}>Change Rating</button>
//     </>
//   )
// }

// function App(){
//   const [movies, setMovies] = useState([
//     {id: 1, name: 'Superman', rating: 9},
//     {id: 2, name: 'Batman', rating: 9.2}
//   ])


//   const handleChange = ()=>{
//     setMovies(movies.map(m => 
//       m.id === 1 ? { ...m, name: "John Wick" } : m
//     ));
//   }
//   return(
//     <>
//       {
//         movies.map(m => 
//           <ul key={Math.random()}>
//             <li>{m.id}</li>
//             <li>{m.name}</li>
//             <li>{m.rating}</li>
//           </ul>
//         )
//       }

//       <button onClick={handleChange}>Change Title</button>
//     </>
//   )
// }
export default App
