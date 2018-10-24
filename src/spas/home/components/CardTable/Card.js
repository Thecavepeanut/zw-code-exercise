import React from 'react';
import './card.scss';

const Card = props => {
  return (
    <div id={`card-${props.id}`} className="card">
      {props.children}
    </div>
  );
};

export default Card;
