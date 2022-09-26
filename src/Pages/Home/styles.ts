import styled from 'styled-components';

export const Container = styled.div`
  background-color: #caf0f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const MainContent = styled.div`
  display: flex;
  flex-shrink: 0;
  width: calc(100% - 260px);
  flex-direction: row;
  justify-content: space-between;
`;
