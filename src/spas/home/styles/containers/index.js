// @flow

import styled from 'styled-components';
import COLORS from '../../shared/constants/colors';

export const AppContainer = styled('div')`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  * {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 300;
  }

  h2, h3 {
    color: ${COLORS.theme.main};
  }

  h2 {
    font-size: 2.5em;
    line-height: 1.5em;
  }

  h3 {
    font-size: 1.75em;
    line-height: 1.35em;
  }

  p {
    color: ${COLORS.theme.font};
  }

  button, .button {
    padding: 5px 10px;
    border-radius: 3px;

    &.primary {
      background: ${COLORS.theme.main};
      color: #FFF;
      font-weight: 500;
    }
  }
`;

export default AppContainer;
