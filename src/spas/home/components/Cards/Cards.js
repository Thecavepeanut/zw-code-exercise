import React from 'react';
import Card from './Card';
import Monte from './Monte';

const Cards = props =>
  props.deck.map((card, i) => (
    <Card
      key={`card-${i}`}
      id={card}
      isRevealed={props.revealed === i}
      revealMe={() => props.reveal(i)}
    >
      {i === 0 && <Monte />}
    </Card>
  ));

export default Cards;
