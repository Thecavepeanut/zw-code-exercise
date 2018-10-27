// @flow

import React, { Fragment } from 'react';

import type { Props } from '../containers/game-over';

// Styles
import { NoClickContainer } from '../styles/app';
import { GameOverMessage } from '../styles/components/game-over';

const GameOverContainer = ({ gameOver }: Props) => (
  <Fragment>
    <NoClickContainer zIndex={20} />
    <GameOverMessage>
      <h2>{gameOver.message}</h2>
      <div>
      <div>
          <p>Winner</p>
          <p>{gameOver.winner}</p>
        </div>
        <div>
          <p>Loser</p>
          <p>{gameOver.loser}</p>
        </div>
      </div>
    </GameOverMessage>
  </Fragment>
);

export default GameOverContainer;
