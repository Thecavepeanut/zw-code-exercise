// @flow
import styled from 'styled-components';

export const GameIcon = styled('div')`
  left: ${(props: { left?: number }) => props.left || 0};
  padding: 30px;
  position: fixed;
  max-height: 100px;
  max-width: 100px;
  top: ${(props: { top?: number }) => props.top || 0};
  text-align: center;

  img {
    height: 100%;
    width: auto;
    fill: #F60;
  }

  &:before {
    content: "";
    clear: both;
    display: table;
  }
`;

export default GameIcon;
