import styled from 'styled-components';

export const Loader = styled('div')`
  background: #FFF;
  height: 100%;
  opacity: .85;
  position: fixed;
  width: 110%;
  z-index: 10;
`;

export const LoadingContainer = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 330px;
  max-width: 480px;
  min-height: 330px;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

export const Spinner = styled.div`
  animation: spin 1.5s linear infinite;
  background: #B4B2dE;
  box-shadow: -1px 0px 50px #F60;
  position: fixed;

  && {
    border-radius: 50%;
    color: transparent;
    border: 8px solid #F5A068;
    border-top: 8px solid #F60;
    font-size: 5.25rem;
    left: 40%;
    margin-bottom: 15px;
    padding: 31px 18px;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 26px;
  }

  + * {
    margin-top: 30px;
    font-weight: 300;
  }
`;

export default Loader;
