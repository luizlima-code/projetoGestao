import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* margin: 2vh 0 2vh 20px; */

  max-width: 260px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: #90e0ef;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    align-self: center;
  }
`;
