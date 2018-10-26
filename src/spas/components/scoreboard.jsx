// @flow strict-local

import React from 'react';

// Types
import type { Props } from '../containers/scoreboard';

// Styles
import { ScoreBoardContainer } from '../styles/components/scoreboard';

const Board = ({ score }: Props) => (
  <ScoreBoardContainer>
    <div className='home-background'>
      <p>Home: {score && score.home}</p>
    </div>
    <div className='visitor-background'>
      <p>Visitors: {score && score.visitors}</p>
    </div>
  </ScoreBoardContainer>
);

export default Board;
