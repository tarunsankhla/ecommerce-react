import React from 'react';
import "./Button.css";

function Button( props ) {
    console.log(props)
  return (
    <div className='btn normal-button'>
        {props.name}
    </div>
  )
}

export default Button