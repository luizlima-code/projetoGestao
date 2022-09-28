import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 100vh;
  max-width: 260px;
  background-color: #00b4d8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    align-self: center;
  }
`;

export const IconButtonResponsive = styled(IconButton)`
  && {
    position: fixed;
    height: 10vh;
    z-index: 1200;
    border-radius: 0;
    background-color: #90e0ef;
    @media only screen and (max-width: 959px) {
      height: 6vh;
    }
    :hover {
      background-color: #90e0ef;
    }
  }
`;
