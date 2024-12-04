const MainContent = () => {

   const content = 'Lola';
   const content_new = '10 inch ka Bhabakta hua Lola';
   let name = "John";
   let date = new Date().toLocaleString();


   const numbers = [1,2,3,4,5];
   const myArray = [
      {
        id: 1,
        name: "Alice",
        age: 25,
      },
      {
        id: 2,
        name: "Bob",
        age: 30,
      },
      {
        id: 3,
        name: "Charlie",
        age: 35,
      },
   ];
  return (
    <div>
      <h2>Main Content is {content}</h2>
      <p>My Choice of Text {content_new}
         <br />
         {name} is present at {date}
      </p>


      <br />
      <p>
         {numbers.map(p => (
            <ul key = {p}>
               <li>{p}</li>
            </ul>
         ))}
      </p>

      <br />

      <p>

         {myArray.map((user)=>(
            <ul key={Math.random()}>
               <li>id : {user.id}</li>
               <li>name : {user.name}</li>
               <li>age : {user.age}</li>

            </ul>
         ))}

         USEING Destructuring
         {myArray.map(({id, name, age})=>(
            <ul key={Math.random()}>
               <li>id : {id}</li>
               <li>name : {name}</li>
               <li>age : {age}</li> 
            </ul>
         ))}
      </p>
     
    </div>
  )
}

export default MainContent
