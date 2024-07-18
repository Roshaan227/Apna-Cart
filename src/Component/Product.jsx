import React from "react";

export default function Product(props) {
  const handleRemove = () => {
    props.removeProduct(props.index); // Call removeProduct function with index
  };

  // Add a null check for props.product
  if (!props.product) {
    return null; // or handle this case appropriately
  }

  return (
    <div className="card mb-3 d-flex flex-row" style={{ maxWidth: '400px', margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">Price: ₹{props.product.price}</p>
        <div className="btn-group mb-3" role="group" aria-label="Quantity controls">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
            style={{ fontSize: '1rem', padding: '8px 15px' }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning" style={{ fontSize: '1rem', padding: '8px 15px' }}>
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
            style={{ fontSize: '1rem', padding: '8px 15px' }}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleRemove}
          style={{ fontSize: '1rem', padding: '8px 15px' }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
