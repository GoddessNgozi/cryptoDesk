import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = (props) => {
  const { query, onSearch } = props;

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search Coin"
        value={query}
        onChange={onSearch}
      />
    </div>
  );
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;