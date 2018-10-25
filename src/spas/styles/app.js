// @flow

import styled from 'styled-components';

export const AppContainer = styled('div')`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

// Color should be passed as string text. Can accept #[hex] or solid [blue]. Should be hex
export const NoClickContainer = styled('div')`
  background: ${(props: { color?: string}) => (props.color ? `${props.color}` : '#000')}
  height: 100%;
  left: 0;
  opacity: .75;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;
