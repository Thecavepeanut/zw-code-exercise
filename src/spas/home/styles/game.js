// @flow
import styled from 'styled-components';

import mediaQueries from '../shared/constants/mobile-sizes';

const gamePieceHeight = 210;
const gamePieceWidth = 300;

export const GameIcon = styled('div')`
  left: ${(props: { left?: number }) => props.left || 0};
  padding: 0;
  position: fixed;
  height: ${gamePieceHeight}px;
  overflow: hidden;
  top: ${(props: { top?: number }) => props.top || 0};
  text-align: center;
  width: ${gamePieceWidth}px;
  z-index: 2;

  img {
    height: 300px;
    width: 300px;
    fill: #F60;

    &:hover {
      cursor: pointer;
      fill: blue;
    }
  }
  @media (max-width: ${mediaQueries.tablet}px){
    height: ${gamePieceHeight / 2}px;
    width: ${gamePieceWidth / 2}px;
    img {
      height: 150px;
      width: 150px;
    }
  }
`;

export const VisitorContainer = styled('div')`
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export default GameIcon;
