import React from 'react';

const Button = props => {
  return (
    <button
      type="button"
      className="btn"
      onClick={props.click}
      disabled={props.disabled ? 'disabled' : ''}
    >
      {props.label}
    </button>
  );
};

export default Button;
