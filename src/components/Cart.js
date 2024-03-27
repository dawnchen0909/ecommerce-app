import React, { useContext } from 'react';
import { useCart } from '../contexts/CartContext';
import { Card, Button, ListGroup, ListGroupItem, FormControl } from 'react-bootstrap';

export const Cart = () => {
  const { cart, removeFromCart, editCartItem } = useCart();

  const updateCartItem = (productId, quantity) => {
    if (quantity > 0) {
      editCartItem(productId, quantity);
    } else {
      removeFromCart(productId);
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="mt-4">
      <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
        <div>
          <i className="bi bi-cart4" style={{ fontSize: '2rem' }}></i>
          <span className="ms-2">Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        {cart.map(item => (
          <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center">
            <div className="me-auto">
              <div className="fw-bold">{item.title}</div>
              Price: ${item.price}
            </div>
            <FormControl
              type="number"
              value={item.quantity}
              onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))}
              style={{ width: '80px', marginRight: '10px' }}
            />
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};
