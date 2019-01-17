import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const HeaderSearchBar = styled.input`
  background: #FAFAFA;
  outline: none;
  border: none;
  border: 1px solid #DDDDDD;
  text-align: center;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  width: 225px;
`

const SearchBar = props => {
  return (
    <form name='Searchbar' onSubmit={props.handleSearch}>
      <HeaderSearchBar 
      className='search-bar'
      type="text"
      placeholder='Search'
      value={props.searchInput}
      onChange={props.handleSearchChange}
      />
    </form>
  )
}

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  handleSearchChange: PropTypes.func,
  handleSearch: PropTypes.func
}

export default SearchBar
