import React from 'react';
import './buttons.scss';

const Button = props => {
  return (
    <button
      type="button"
      className={props.classes.join(' ')}
      onClick={props.click}
      disabled={props.disabled ? 'disabled' : ''}
    >
      {props.label}
    </button>
  );
};

export default Button;
