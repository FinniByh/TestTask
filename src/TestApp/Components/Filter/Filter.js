import React from 'react'

export default function Filter (props){

  return(
    <div className='filter-container'>
      <form>
        <label className='theme-filter-label'>
          Filter by theme:
          <select onChange={props.setTheme} className='theme-select-menu'>
            <option value="All">All</option>
            <option value="Nature">Nature</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </label>
        <label> Filter by author:
          <input className='author-filtering' onChange={props.setAuthor}></input>  
        </label>
      </form>
    </div>
  );
}

