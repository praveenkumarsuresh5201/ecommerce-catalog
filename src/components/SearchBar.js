import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="form">
  <input
    type="text"
    className="search-input"
    placeholder="Search products..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button type="submit" className="search-button">Search</button>
</form>
  );
}

export default SearchBar;