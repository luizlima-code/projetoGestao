import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 88vh;

  padding: 15px 20px 0 0;
  margin: 2vh 10px 2vh 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DivGrid = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 10px;

  overflow-y: auto;

  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #0077b6;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
