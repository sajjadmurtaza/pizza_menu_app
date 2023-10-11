import React from 'react';

const SearchAndSort = ({ searchTerm, setSearchTerm, setSortOrder }) => {
  return (
    <div className="search-and-sort">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name"
        className="search-input"
      />
      Sort:
      <button onClick={() => setSortOrder('asc')} className="sort-button">
        Price Ascending
      </button>
      <button onClick={() => setSortOrder('desc')} className="sort-button">
        Price Descending
      </button>
    </div>
  );
};

export default SearchAndSort;
