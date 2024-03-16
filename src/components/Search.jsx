import React from 'react'
import { FaSearch  } from 'react-icons/fa'

const Search = () => {
  return (
    <form className='search_food'>
        <input type="text" placeholder='search here' />
        <FaSearch className='search_icon'/>
    </form>
)
}

export default Search