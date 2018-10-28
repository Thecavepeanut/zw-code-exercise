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
    border: none;
    border-radius: 3px;
    color: ${COLORS.theme.main}
    font-weight: 600;
    margin-rigth: 30px;
    padding: 5px 10px;

    &.primary {
      background: ${COLORS.theme.main};
      border-radius: 200px;
      color: #FFF;
      padding: 10px 30px 8px;
    }

    &.secondary {
      background: transparent;
      border: 1px solid ${COLORS.theme.main};
      border-radius: 200px;
      color: ${COLORS.theme.main}
    }

    &.asText {
      background: transparent;
      border: none;
      border-radius: 0;
      border-bottom: 2px solid #FFF;
      color: ${COLORS.theme.main};
      padding; 4px;
      margin-right: 8px;

      &.active, &:hover {
        border-bottom: 2px solid ${COLORS.theme.main};
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export default AppContainer;
