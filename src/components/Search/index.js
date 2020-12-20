import React from 'react'
import IconSearch from '../../icons/iconSearch/index'
import './search.css'

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="Search">
      <input
        ref={searchInput}
        id='search__input'
        placeholder='Buscar'
        type="text"
        className="Search__input"
        value={search}
        onChange={handleSearch} />
      <IconSearch/>
    </div>
  )
}

export default Search