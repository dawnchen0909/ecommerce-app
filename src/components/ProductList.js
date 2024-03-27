import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { fetchProducts } from '../services/productService';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './ProductList.css';

export const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  // handle adding items to the cart
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <Row xs={1} md={6} lg={4} xl={3} className="g-4">
      {filteredProducts.map(product => (
        <Col key={product.id}>
          <Card style={{ width: '100%', minHeight: '400px' }}>
            <div style={{ overflow: 'hidden', position: 'relative', paddingBottom: '100%' }}>
              <Card.Img variant="top" src={product.thumbnail} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button className="mt-auto add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
