import React from 'react';
import PropTypes from 'prop-types';
// import './Search.css';

const Search = ({ search, onSearch }) => (
  <div className="searchContainer">
    <div className="search">
      <input
        className="searchInput"
        type="text"
        placeholder="Search Coins"
        value={search}
        onChange={onSearch}
      />
      <span className="searchIcon">🔍</span>
    </div>
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
