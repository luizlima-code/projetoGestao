import { AppBar } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: black;
  font-size: 36px;
`;

export const StyledAppBarMobile = styled(AppBar)`
  && {
    width: calc(100% - 30px);
    padding-left: 10px;
  }
`;

export const StyledAppBar = styled(AppBar)`
  && {
    width: calc(100% - 260px);
    margin-left: 260px;
  }
`;
