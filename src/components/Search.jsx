import React from 'react';
import PropTypes from 'prop-types';
// import './Search.css';

const Search = ({ search, onSearch }) => (
  <div className="searchContainer">
    <input
      type="text"
      placeholder="Search Coins"
      value={search}
      onChange={onSearch}
    />
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
