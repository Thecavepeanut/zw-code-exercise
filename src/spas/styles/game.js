// @flow
import styled from 'styled-components';

import COLORS from '../../utils/constants/colors';

export const GameIcon = styled('div')`
  border: 1px solid ${COLORS.theme.main};
  border-radius: 3px;
  box-shadow: 3px 5px 15px #000;
  left: ${(props: { left?: number }) => props.left || 0};
  padding: 30px;
  position: fixed;
  max-height: 40px;
  max-width: 80px;
  top: ${(props: { top?: number }) => props.top || 0};
  text-align: center;

  &:before {
    content: "";
    clear: both;
    display: table;
  }
`;

export default GameIcon;
