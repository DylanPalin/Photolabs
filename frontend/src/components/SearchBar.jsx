import React, { useState } from "react";
import "../styles/SearchBar.scss";
import SearchIcon from "./SearchIcon";

function SearchBar ({ dark, searchReq }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    searchReq(searchInput);
    setSearchInput('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={`search-form ${dark ? 'dark' : ''}`}>
        <div className="icon">
          <SearchIcon dark={dark} />
        </div>
        <input 
          className="search-bar" 
          type="search" 
          id="search" 
          placeholder="Search by Username, Location, Country..." 
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar;