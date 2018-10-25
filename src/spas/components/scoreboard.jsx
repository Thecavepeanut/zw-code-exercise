// @flow strict-local

import React from 'react';

// Types
import type { Props } from '../containers/scoreboard';

const Board = ({ score }: Props) => (
  <div>
    <div>
      <p>{score && score.home}</p>
    </div>
    <div>
      <p>{score && score.visitors}</p>
    </div>
  </div>
);

export default Board;
