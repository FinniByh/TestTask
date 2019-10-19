import React from 'react'

export default function Post(props) {
  return(
    <div className='post-body'>
      <p className='post-theme'>{props.theme}</p>
      <p className='post-content'>{props.text}</p>
      <span className='post-info'>
        <p className='post-date'>{props.date}</p>
        <p className='post-author'>{props.name}</p>
      </span>
    </div>
  );
}