import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 100vh;
  max-width: 260px;
  background-color: #90e0ef;
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
    height: 64px;
    z-index: 1200;
    border-radius: 0;
    background-color: #eee;
    @media only screen and (max-width: 600px) {
      height: 56px;
    }
    :hover {
      background-color: #eee;
    }
  }
`;
