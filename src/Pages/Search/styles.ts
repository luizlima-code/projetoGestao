import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #caf0f8;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentSearch = styled.div`
  @media only screen and (max-width: 959px) {
    width: 100% !important;
    height: 100vh;

    margin: 8vh 10px 0 10px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  width: calc(100% - 280px);
  max-height: 87vh;

  margin: 13vh 10px 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
