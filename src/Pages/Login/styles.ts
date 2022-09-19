import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  background-color: #1C31F0;
  background-image: url('/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  border-radius: 16px;
`;

// TODO: Colocar responsividade nos inputs
export const Input = styled(Field)`
   width: 80%;
   margin-bottom: 18px;
   padding-left: 10px;
   border-radius: 16px;
   height: 50px;
   border: none;
`;

export const ButtonLogin = styled.button`
   width: 144px;
   height: 56px;
   border-radius: 16px;
   transition: all 0.4s;
   font-weight: 600;

   :hover {
    background-color: black;
    color: black;
    cursor: pointer;
   }
`;

export const LogoImg = styled.img`
   width: 100%;
`;
