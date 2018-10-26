// @flow
import styled from 'styled-components';

export const GameIcon = styled('div')`
  left: ${(props: { left?: number }) => props.left || 0};
  padding: 30px;
  position: fixed;
  height: 25%;
  min-height: 100px;
  min-width: 100px;
  top: ${(props: { top?: number }) => props.top || 0};
  text-align: center;
  width: 25%;
  z-index: 2;

  img {
    height: 100%;
    width: auto;
    fill: #F60;

    &:hover {
      cursor: pointer;
      fill: blue;
    }
  }

  &:before {
    content: "";
    clear: both;
    display: table;
  }
`;

export const VisitorContainer = styled('div')`
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export default GameIcon;
