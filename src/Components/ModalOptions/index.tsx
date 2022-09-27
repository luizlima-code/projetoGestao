import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { BoxStyle, Buttons, InputStyle } from './styles';
import { Grid, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const ModalOptions = ({
  openModal,
  setOpenModal,
  title,
}: any): React.ReactElement => {
  const isMobile = useMediaQuery('(max-width:959px)');

  const headerModal = (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Grid item>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mb: 2 }}>
          Cadastrar {title}
        </Typography>
      </Grid>
      {isMobile ? null : (
        <Grid item>
          <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );

  const botoesModal = (
    <Buttons>
      {isMobile ? (
        <Button
          variant="contained"
          sx={{ mt: 2, mr: 2 }}
          size="medium"
          style={{ backgroundColor: '#dedede', color: 'black' }}
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </Button>
      ) : null}

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        size="medium"
        style={{ backgroundColor: '#0077b6' }}
        endIcon={<SaveAltIcon />}
      >
        Salvar
      </Button>
    </Buttons>
  );

  const clienteModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Grid container spacing={1.2}>
          <Grid item md={4} xs={12}>
            <InputStyle name="cliNome" id="cliNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle name="cliCpf" id="cliCpf" label="CPF" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle name="cliEmail" id="cliEmail" label="Email" fullWidth />
          </Grid>
        </Grid>{' '}
        {botoesModal}
      </BoxStyle>
    </Modal>
  );

  const etapasModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Grid container spacing={1.2}>
          <Grid item md={6} xs={12}>
            <InputStyle
              name="etapaNome"
              id="etapaNome"
              label="Nome"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputStyle
              name="etapaDescricao"
              id="etapaDescricao"
              label="Descrição"
              fullWidth
            />
          </Grid>
        </Grid>
        {botoesModal}
      </BoxStyle>
    </Modal>
  );

  const funcionariosModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Grid container spacing={1.2}>
          <Grid item md={12} xs={12}>
            <InputStyle name="funcNome" id="funcNome" label="Nome" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={1.2} pt={2}>
          <Grid item md={4} xs={12}>
            <InputStyle name="funcCpf" id="funcCpf" label="Cpf" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="funcEmail"
              id="funcEmail"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="funcTelefone"
              id="funcTelefone"
              label="Telefone"
              fullWidth
            />
          </Grid>
        </Grid>
        {botoesModal}
      </BoxStyle>
    </Modal>
  );
  const itemModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Grid container spacing={1.2}>
          <Grid item md={4} xs={12}>
            <InputStyle name="itemNome" id="itemNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="itemCodigo"
              id="itemCodigo"
              label="Codigo"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="itemProjeto"
              id="itemProjeto"
              label="Projeto"
              fullWidth
            />
          </Grid>
        </Grid>
        {botoesModal}
      </BoxStyle>
    </Modal>
  );

  const projetoModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Grid container spacing={1.2}>
          <Grid item md={6} xs={12}>
            <InputStyle name="projNome" id="projNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputStyle
              name="projCliente"
              id="projCliente"
              label="Cliente"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1.2} pt={2}>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="projDataVenda"
              id="projDataVenda"
              label="Data Venda"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="projDataPrevista"
              id="projDataPrevista"
              label="Data Prevista"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <InputStyle
              name="projDataEntrega"
              id="projDataEntrega"
              label="Data Entrega"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1.2} pt={2}>
          <Grid item md={12} xs={12}>
            <InputStyle
              id="outlined-multiline-static"
              name="Descricao"
              label="Descricao"
              fullWidth
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>
        {botoesModal}
      </BoxStyle>
    </Modal>
  );

  const renderModal = () => {
    switch (title) {
      case 'Cliente':
        return clienteModal;
      case 'Etapas':
        return etapasModal;
      case 'Funcionário':
        return funcionariosModal;
      case 'Item':
        return itemModal;
      case 'Projeto':
        return projetoModal;
    }
  };

  const actualModal = renderModal();

  return actualModal as ReactJSXElement;
};

export default ModalOptions;
