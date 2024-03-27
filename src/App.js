import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductList } from './components/ProductList';
import { SearchBar } from './components/SearchBar';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';

function App() {
  // handle the search functionality.
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <Container>
        <Row>
          <Col>
            <h1 style={{ color: '#EA7773' }}>E-commerce Platform</h1>
            <SearchBar onSearch={handleSearch} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={8}>
            <ProductList searchQuery={searchQuery} />
          </Col>
          <Col xs={12} md={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </CartProvider>
  );
}

export default App;