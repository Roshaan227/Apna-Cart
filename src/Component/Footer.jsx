import React, { useState, useEffect } from 'react';

export default function Footer(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Delayed appearance by 3000 milliseconds (3 seconds)

    return () => clearTimeout(timer);
  }, []);

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f8f9fa', // Example background color
    borderTop: '1px solid #dee2e6', // Example border style
    padding: '10px 20px',
    transition: 'transform 1s ease-out',
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <button className="btn btn-danger" onClick={props.resetCart}>Reset</button>
          </div>
          <div className="col-auto">
            <h4 className="total-amount mb-0" style={{ fontWeight: 'bold' }}>Total Amount: ₹{props.totalAmount}</h4>
          </div>
          <div className="col-auto">
            <button className="btn btn-warning" onClick={props.payNow}>Pay Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
