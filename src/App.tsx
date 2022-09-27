import React from 'react';
import './App.css';
import Alert from './Components/Alert';
import { MyRoutes } from './Routes/routes';
import { AlertTypes } from './store/ducks/appStatus/types';

interface DispatchProps {
  dismissAlert(): void;
}

interface OwnProps {
  isAlertShowed: boolean;
  alertMessage: string;
  alertType: AlertTypes;
}

type Props = DispatchProps & OwnProps;

function App(props: Props) {
  const { isAlertShowed, dismissAlert, alertMessage, alertType } = props;

  const handleSnackClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dismissAlert();
  };

  return (
    <>
      <div>
        <MyRoutes />
      </div>
      <Alert
        isOpened={isAlertShowed}
        handleClose={handleSnackClose}
        message={alertMessage}
        type={alertType}
      />
    </>
  );
}

export default App;
