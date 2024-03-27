import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button className="custom-btn" onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
};
