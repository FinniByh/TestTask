import React from 'react'

export default function Post(props) {
  return(
    <div>
      <p>{`${props.name} writing in ${props.theme}`}</p>
      <p>{props.text}</p>
      <p>{`Post was created in ${props.date}`}</p>
    </div>
  );
}