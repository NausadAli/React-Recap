function ProductList(item) {
   
  
   return (
    <div>
      {
       
            <ul key={item.id}>
               <li>{item.name}</li>
               <li>{item.price}</li>
            </ul>
       
      }
    </div>
  )
}

export default ProductList;
