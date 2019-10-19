import React from 'react'

export default function Filter (props){

  return(
    <div>
      <form>
        <label>
          Тема:
          <select onChange={props.set}>
            <option value="All">All</option>
            <option value="Nature">Nature</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </label>
      </form>
    </div>
  );
}

