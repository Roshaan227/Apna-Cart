import React from 'react';
import Product from './Product';
export default function ProductList(props) {
  if (props.productList.length === 0) {
    return <h2>No More Items Exist in the Cart</h2>;
  }
// export default function ProductList(props) {
  return (
    <>
      {props.productList.map((product, index) => (
         
        <div key={index}>
          <Product
            product={product}
            index={index}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeProduct={props.removeProduct} // Pass removeProduct function
          />
        </div>
             ))}
    </>
  );
}
