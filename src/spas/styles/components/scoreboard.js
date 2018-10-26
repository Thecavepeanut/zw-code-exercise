// @flow
import styled from 'styled-components';

// Colors
import COLORS from '../../../utils/constants/colors';

// Constants
import mediaQuery from '../../../utils/constants/mobile-sizes';

export const ScoreBoardContainer = styled('div')`
  background: #FFF;
  border: 5px solid ${COLORS.scoreboard.border};
  border-radius: 5px;
  box-shadow: 3px 5px 25px #000;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  left: 50%;
  margin: 0 auto;
  padding: 30px;
  position: fixed;
  width: 60%;
  transform: translateX(-50%);
  z-index: 5;

  > div {
    margin-right: 40px;
    padding: 20px;
    text-align: center;
    width: 100%;
    border: 2px inset ${COLORS.theme.main};

    &:last-child {
      border-color: ${COLORS.scoreboard.border};
      margin-right: 0;
    }
  }

  p {
    font-size: 2em;
    font-weight: 500;
    line-height: 0;
  }

  @media (max-width:${mediaQuery.phone}px) {
    width: 90%;
  }
`;

export default ScoreBoardContainer;
