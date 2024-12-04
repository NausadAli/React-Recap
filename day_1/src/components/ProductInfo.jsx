function ProductInfo(){
   const product = {
      name: 'Laptop',
      display : '20 inch',
      price: 20000
   }


   return(
     <div>
      <p>
         Product:
         <br />
         name: {product.name}
         <br />
         display: {product.display}
         <br />
         price: {product.price}
      </p>
     </div>
   )
}
export default ProductInfo;