import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import Modal from '@mui/material/Modal';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { BoxStyle, Buttons } from './styles';
import { Grid, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { postFuncionariosRequest } from '../../store/ducks/funcionarios/actions';
import FieldsForms from '../FieldsForms';
import { TextField } from 'formik-material-ui';

interface FuncTypes {
  nome: string,
  cpf: string,
  email: string,
  telefone: string,
  senha: string,
}

const ModalOptions = ({
  openModal,
  setOpenModal,
  title,
}: any): React.ReactElement => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // number = só pra ver funcionando o useEffect, se toda vez que atualizar o modal vai funcionar
  const [number, setNumber] = useState(1);

  useEffect(() => {
    setName(title);
    setNumber(number + 1)
    console.log('chamada do modal: ', number);
  }, [title]);

  const initial_values_func = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
  };

  const handlePostFunc = (values: FuncTypes, setSubmitting: any) => {
    dispatch(postFuncionariosRequest(values));
    setSubmitting();
    setOpenModal(false);
  }

  // aqui começa os elementos (Vou refatorar depois)
  const clienteModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
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
          <Grid item>
            <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={1.2}>
          <Grid item md={4} xs={12}>
            <FieldsForms name="cliNome" id="cliNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms name="cliCpf" id="cliCpf" label="CPF" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms name="cliEmail" id="cliEmail" label="Email" fullWidth />
          </Grid>
        </Grid>

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
          <Grid item md={4} xs={12}>
            <InputStyle name="cliNome" id="cliNome" label="Nome" fullWidth />
          </Grid>
          <Grid item>
            <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
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
            <FieldsForms
              name="etapaNome"
              id="etapaNome"
              label="Nome"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FieldsForms
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

  // usar de exemplo
  const funcionariosModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
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
          <Grid item>
            <IconButton aria-label="close" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Formik
          enableReinitialize={false}
          initialValues={initial_values_func}
          onSubmit={(values: FuncTypes, { setSubmitting }) => {
            handlePostFunc(values, setSubmitting);
          }}
        >
          <Form>
            <Grid container spacing={1.2}>
              <Grid item md={6} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="nome"
                  id="nome"
                  label="Nome"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="senha"
                  id="senha"
                  label="Senha"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={1.2} pt={2}>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  name="cpf"
                  component={TextField}
                  id="cpf"
                  label="Cpf"
                  fullWidth />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  name="email"
                  component={TextField}
                  id="email"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  name="telefone"
                  component={TextField}
                  id="telefone"
                  label="Telefone"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Buttons>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                size="medium"
                type="submit"
                endIcon={<SaveAltIcon />}
              >
                Salvar
              </Button>
            </Buttons>
          </Form>
        </Formik>
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
            <FieldsForms name="itemNome" id="itemNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms
              name="itemCodigo"
              id="itemCodigo"
              label="Codigo"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms
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
            <FieldsForms name="projNome" id="projNome" label="Nome" fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
            <FieldsForms
              name="projCliente"
              id="projCliente"
              label="Cliente"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1.2} pt={2}>
          <Grid item md={4} xs={12}>
            <FieldsForms
              name="projDataVenda"
              id="projDataVenda"
              label="Data Venda"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms
              name="projDataPrevista"
              id="projDataPrevista"
              label="Data Prevista"
              fullWidth
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <FieldsForms
              name="projDataEntrega"
              id="projDataEntrega"
              label="Data Entrega"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={1.2} pt={2}>
          <Grid item md={12} xs={12}>
            <FieldsForms
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
