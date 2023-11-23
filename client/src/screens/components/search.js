import React from 'react'
import "./search.css";
import {FaSearch} from 'react-icons/fa';


const Search = (props) => {
  return (
    <div class="search-bar">
        <input value={props.val} onChange={props.onChange} type="text" placeholder="Search by id..." />
        <button onClick={props.click} type="submit"><FaSearch/></button>
    </div>
  )
}

export default Search;