import { Box, TextField } from '@mui/material';
import { Field } from 'formik';
import styled from 'styled-components';

export const BoxStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 16px;
  box-shadow: 24px;
  padding: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 959px) {
    width: 90%;
  }
`;

export const Buttons = styled.div`
  margin: 5px 0;

  display: flex;
  justify-content: flex-end;
`;
