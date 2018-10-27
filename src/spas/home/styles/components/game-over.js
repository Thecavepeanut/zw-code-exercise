// @flow

import styled from 'styled-components';

// Colors
import COLORS from '../../shared/constants/colors';

export const GameOverMessage = styled('div')`
  background-color: #FFF;
  box-shadow: 3px 5px 50px #000;
  border: 5px solid ${COLORS.theme.main};
  border-raduis: 5px;
  left: 50%;
  max-width: 580px;
  min-width: 350px;
  padding: 30px;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 20;

  > div {
    background-color: #FFF;
    border: 3px solid ${COLORS.scoreboard.border};
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    padding: 20px 10px;

    > div {
      margin-right: 30px;
      &:last-child {
        marginl-right: 0;
      }
    }
  }

  button {
    margin-top: 30px;
  }
`;

export const Title = styled('h3')`
  font-weight: 600;
`;

export const SubTitle = styled('p')`
  font-size: 2.5em;
`;

export const Score = styled('p')`
  color: ${COLORS.scoreboard.border};
  font-size: 3em;
  font-weight: 600;
  text-shadow: 3px 5px 10px #FFF;
`;

