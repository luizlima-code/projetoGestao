import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  height: 100%;

  margin-top: 2vh;

  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #0077b6;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
