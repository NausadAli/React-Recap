const UserList = ()=>{
   const arrayOfObjects = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
    ];
    
    
   return (
      <>
         <div>
            {
               arrayOfObjects.map(obj =>(
                  <ul key={obj.id}>
                     <li>{obj.name}</li>
                     <li>{obj.age}</li>
                  </ul>
               ))
            }
         </div>
      </>
   )

}

export default UserList;