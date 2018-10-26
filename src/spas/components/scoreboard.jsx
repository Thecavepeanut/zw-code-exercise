// @flow strict-local

import React from 'react';

// Types
import type { Props } from '../containers/scoreboard';

const Board = ({ score }: Props) => (
  <div>
    <div>
      <p>Home: {score && score.home}</p>
    </div>
    <div>
      <p>Visitors: {score && score.visitors}</p>
    </div>
  </div>
);

export default Board;
