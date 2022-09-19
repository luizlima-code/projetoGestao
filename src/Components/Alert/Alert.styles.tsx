import styled from 'styled-components';

const SPIAlert = styled('div')`
  &.alert-SUCCESS .MuiSnackbarContent-root {
    background-color: #4caf50;
  }

  &.alert-INFO .MuiSnackbarContent-root {
    background-color: #2196f3;
  }

  &.alert-WARNING .MuiSnackbarContent-root {
    background-color: #ff9800;
  }

  &.alert-ERROR .MuiSnackbarContent-root {
    background-color: #f44336;
  }

  .alert-message {
    display: flex;
    align-items: center;
    max-width: 500px;

    .MuiSvgIcon-root {
      margin-right: 10px;
    }
  }
`;

export { SPIAlert };
