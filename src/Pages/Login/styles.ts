import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 959px) {
    width: 100% !important;
    height: 70%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  border-radius: 16px;

  padding: 10px;

  @media only screen and (max-width: 959px) {
    width: 95% !important;
    height: 80%;
  }
`;

// TODO: Colocar responsividade nos inputs
export const Input = styled(Field)`
  width: 90%;
  margin: 0 18px 18px 18px;
  padding-left: 10px;
  border-radius: 16px;
  height: 50px;
  border: none;

  align-items: center;
`;

export const ButtonLogin = styled.button`
  width: 144px;
  height: 56px;
  border-radius: 16px;
  transition: all 0.4s;
  font-weight: 600;

  margin: 0 32%;

  @media only screen and (max-width: 959px) {
    margin: 0 30%;
  }

  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 90%;

  @media only screen and (max-width: 959px) {
    width: 60%;
  }
`;
