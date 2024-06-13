// src/components/SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css';



const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search-bar input-group mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Enter city name or zip code" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <div className="input-group-append">
        <button className="btn px-4" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
