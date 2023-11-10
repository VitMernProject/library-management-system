import React from 'react'
import "./search.css";
import {FaSearch} from 'react-icons/fa';


const Search = () => {
  return (
    <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit"><FaSearch/></button>
    </div>
  )
}

export default Search;