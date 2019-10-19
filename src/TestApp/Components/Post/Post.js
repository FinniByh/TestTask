import React from 'react'

export default function Post(props) {
  return(
    <div className='post-body'>
      <p className='post-author'>{`${props.name} is writing in ${props.theme}`}</p>
      <p className='post-content'>{props.text}</p>
      <p className='post-date'>{`Post was created in ${props.date}`}</p>
    </div>
  );
}