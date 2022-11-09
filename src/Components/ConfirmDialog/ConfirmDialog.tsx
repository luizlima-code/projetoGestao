/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import {
  Modal,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { BoxStyle } from './styles';

interface Props {
  open: boolean;
  title: string;
  description: string;
  onOK(): void;
  onCancel(): void;
  onClose(): void;
}

const ConfirmDialog = (props: Props): React.ReactElement => {
  const { open, title, description, onOK, onCancel, onClose } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={title}
      aria-describedby={description}
    >
      <BoxStyle>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={onOK} color="primary" autoFocus>
            Apagar
          </Button>
        </DialogActions>
      </BoxStyle>
    </Modal>
  );
};

export default ConfirmDialog;
