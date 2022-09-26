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
  width: 100vw;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentSearch = styled.div`
  width: 100%;
  height: 88vh;

  margin: 2vh 10px 2vh 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
