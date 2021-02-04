import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleClick, handleSubmit }) => (
  <div style={{ backgroundColor: 'lightgrey', width: '80vh', height: '30vw' }}>
    <form handleSubmit = { handleSubmit }>
      <h2 style={{ color: 'navy' }}>Search Here</h2>
      <input value="type here" onChange={handleClick}></input>
      <button>Search</button>
    </form>
  </div>
);

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
