import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = props => {
  return (
    <div>
      <input 
      className='search-bar'
      type="text"
      placeholder='Search'
      />
    </div>
  )
}

SearchBar.propTypes = {

}

export default SearchBar
