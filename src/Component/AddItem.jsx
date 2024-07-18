import React, { useState } from 'react';

function AddItem(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && price) {
      props.addProduct({ name, price: parseFloat(price), quantity: 0 });
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="add-item-form">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Product</button>
      </form>
    </div>
  );
}

export default AddItem;
