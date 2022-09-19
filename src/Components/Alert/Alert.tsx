import React from 'react';

import { SPIAlert } from './Alert.styles';
import { AlertTypes } from '../../store/ducks/appStatus/types';
import { IconButton, Snackbar } from '@mui/material';
import { CheckCircle, Close, Error, Info, Warning } from '@mui/icons-material';

interface OwnProps {
  isOpened: boolean;
  handleClose: (
    event:
      | React.MouseEvent<Element, MouseEvent>
      | React.SyntheticEvent<Element, Event>
      | any,
    reason?: string | undefined
  ) => void;
  message: string;
  type: AlertTypes;
}

type Props = OwnProps;

const renderIcon = (type: AlertTypes) => {
  switch (type) {
    case AlertTypes.SUCCESS:
      return <CheckCircle fontSize="small" />;
    case AlertTypes.INFO:
      return <Info fontSize="small" />;
    case AlertTypes.WARNING:
      return <Warning fontSize="small" />;
    case AlertTypes.ERROR:
      return <Error fontSize="small" />;
    default:
      return <></>;
  }
};

const Alert = (props: Props): React.ReactElement => {
  const { isOpened, handleClose, message, type } = props;

  return (
    <>
      {!isOpened && <></>}
      {isOpened && (
        <SPIAlert className={`alert-${type}`}>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isOpened}
            autoHideDuration={6000}
            onClose={handleClose}
            message={
              <span className="alert-message">
                {renderIcon(type)}
                {message}
              </span>
            }
            action={
              <>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <Close fontSize="small" />
                </IconButton>
              </>
            }
          />
        </SPIAlert>
      )}
    </>
  );
};

export default Alert;
