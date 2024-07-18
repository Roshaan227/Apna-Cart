import React, { useState } from 'react';
import Navbar from './Component/Navbar.jsx';
import ProductList from './Component/ProductList.jsx';
import Footer from './Component/Footer.jsx';
import AddItem from './Component/AddItem.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const initialProducts = [
    {
      price: 9999,
      name: "IPhone 10S Max",
      quantity: 0
    },
    {
      price: 999,
      name: "RealMe 10S Max",
      quantity: 0
    }
  ];

  const [productList, setProductList] = useState(initialProducts);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
    }
    setProductList(newProductList);
  };

  const removeProduct = (index) => {
    const newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const resetCart = () => {
    const newProductList = productList.map(product => ({ ...product, quantity: 0 }));
    setProductList(newProductList);
  };

  const totalAmount = productList.reduce((total, product) => total + product.price * product.quantity, 0);

  const payNow = () => {
    alert(`Total Amount to be paid: ₹${totalAmount}`);
  };

  const addProduct = (product) => {
    setProductList([...productList, product]);
  };
  
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addProduct={addProduct} />
        <ProductList 
          productList={productList} 
          incrementQuantity={incrementQuantity} 
          decrementQuantity={decrementQuantity} 
          removeProduct={removeProduct} // Pass removeProduct function to ProductList
        />
      </main>
      <Footer 
        totalAmount={totalAmount} 
        resetCart={resetCart} 
        payNow={payNow} 
        
      />
      
    </>
  );
}

export default App;
