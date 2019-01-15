import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = props => {
  return (
    <form name='Searchbar' onSubmit={props.handleSearch}>
      <input 
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

}

export default SearchBar
