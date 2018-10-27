// @flow

import styled from 'styled-components';

// Constants
import COLORS from '../../shared/constants/colors';

export const IntroContainer = styled('div')`
  background: #FFF;
  border: 4px solid ${COLORS.theme.main};
  border-radius: 3px;
  box-shadow: 3px 5px 15px #000;
  left: 50%;
  max-width: 480px;
  min-width: 350px;
  padding: 20px 20px 60px;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 11;

  &:before, &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }

  button {
    margin-top: 30px;
  }
`;

export default IntroContainer;
