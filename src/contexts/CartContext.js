import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // If item exists, increase quantity
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const editCartItem = (productId, newQuantity) => {
    setCart(cart.map((item) => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    editCartItem
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
