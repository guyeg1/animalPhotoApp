import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (image) => {
    setCartItems((prevItems) => [...prevItems, image]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((image) => (
        <div key={image.id}>
          <img src={image.urls.regular} alt={image.alt_description} width={200} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Cart;