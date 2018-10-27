// @flow

import styled from 'styled-components';

// Colors
import COLORS from '../../shared/constants/colors';

export const GameOverMessage = styled('div')`
  background: #FFF;
  border-raduis: 3px;
  box-shadow: 3px 5px 50px #000;
  border: 5px solid ${COLORS.theme.main};
  left: 50%;
  max-width: 580px;
  min-width: 350px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 20;

  > div {
    display: flex;
    flex-direction: row;
    > div {
      margin-right: 30px;
      &:last-child {
        marginl-right: 0;
      }
    }
  }
`;

export default GameOverMessage;
