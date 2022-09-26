import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 959px) {
    width: 100% !important;
  }
  
  width: calc(100% - 280px);
  
  height: 88vh;

  margin: 2vh 10px 2vh 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DivGrid = styled.div`
  background-color: white;
  border-radius: 16px;

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
