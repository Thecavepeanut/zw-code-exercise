import React from 'react'

const Button = props => (
  <div className={`button ${props.className}`} onClick={props.onClick}>
    {props.text}
  </div>
)

export default Button