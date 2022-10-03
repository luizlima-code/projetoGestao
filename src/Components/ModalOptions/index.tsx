import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
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
import { postClientesRequest } from '../../store/ducks/clientes/actions';
import { postEtapasRequest } from '../../store/ducks/etapas/actions';
import { Clientes } from '../../store/ducks/clientes/types';
import { postProjetosRequest } from '../../store/ducks/projeto/actions';

interface FuncTypes {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha?: string;
}

interface EtapaTypes {
  descricao: string;
  nome: string;
}

interface ProjetoTypes {
  cliente: Clientes;
  nome: string;
  dataVenda: string;
  dataPrevisao: string;
  dataInicial: string;
  dataEntrega: string;
  descricao: string;
}

interface PropsTypes {
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void;
  title: string;
  id?: string;
}

const ModalOptions = ({
  openModal,
  setOpenModal,
  title,
  id,
}: PropsTypes): React.ReactElement => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    setName(title);
  }, [title]);

  const initial_values_func = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
  };

  const initial_values_etapa = {
    nome: '',
    descricao: '',
  };

  const initial_values_projeto = {
    nome: '',
    cliente: {
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      id: '4',
    },
    dataVenda: new Date().toISOString(),
    dataInicial: new Date().toISOString(),
    dataPrevisao: new Date().toISOString(),
    dataEntrega: new Date().toISOString(),
    descricao: '',
  };

  const handlePostFunc = (values: FuncTypes, setSubmitting: any) => {
    dispatch(postFuncionariosRequest(values));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostCliente = (values: FuncTypes, setSubmitting: any) => {
    dispatch(postClientesRequest(values));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostEtapa = (values: EtapaTypes, setSubmitting: any) => {
    dispatch(postEtapasRequest(values));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostProjeto = (values: ProjetoTypes, setSubmitting: any) => {
    dispatch(postProjetosRequest(values));
    setSubmitting();
    setOpenModal(false);
  };

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
          {id ? `Editar ` : `Cadastrar `} {title}
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
        type="submit"
        style={{ backgroundColor: '#0077b6' }}
        endIcon={<SaveAltIcon />}
      >
        Salvar
      </Button>
    </Buttons>
  );

  // aqui começa os elementos (Vou refatorar depois)
  const clienteModal = (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        {headerModal}
        <Formik
          enableReinitialize={false}
          initialValues={initial_values_func}
          onSubmit={(values: FuncTypes, { setSubmitting }) => {
            handlePostCliente(values, setSubmitting);
          }}
        >
          <Form>
            <Grid container spacing={1.2}>
              <Grid item md={12} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="nome"
                  id="nome"
                  label="Nome"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={1.2}>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="telefone"
                  id="telefone"
                  label="Telefone"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="cpf"
                  id="cpf"
                  label="CPF"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="email"
                  id="email"
                  label="Email"
                  fullWidth
                />
              </Grid>
            </Grid>
            {botoesModal}
          </Form>
        </Formik>
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
        <Formik
          enableReinitialize={false}
          initialValues={initial_values_etapa}
          onSubmit={(values: EtapaTypes, { setSubmitting }) => {
            handlePostEtapa(values, setSubmitting);
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
                  name="descricao"
                  id="descricao"
                  label="Descrição"
                  fullWidth
                />
              </Grid>
            </Grid>
            {botoesModal}
          </Form>
        </Formik>
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
                  fullWidth
                />
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
            {botoesModal}
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
        <Formik
          enableReinitialize={false}
          initialValues={initial_values_func}
          onSubmit={(values: FuncTypes, { setSubmitting }) => {
            handlePostFunc(values, setSubmitting);
          }}
        >
          <Form>
            <Grid container spacing={1.2}>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="itemNome"
                  id="itemNome"
                  label="Nome"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="itemCodigo"
                  id="itemCodigo"
                  label="Codigo"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="itemProjeto"
                  id="itemProjeto"
                  label="Projeto"
                  fullWidth
                />
              </Grid>
            </Grid>
            {botoesModal}
          </Form>
        </Formik>
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
        <Formik
          enableReinitialize={false}
          initialValues={initial_values_projeto}
          onSubmit={(values: ProjetoTypes, { setSubmitting }) => {
            handlePostProjeto(values, setSubmitting);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={1.2}>
                  <Grid item md={4} xs={12}>
                    <FieldsForms
                      component={TextField}
                      name="nome"
                      id="nome"
                      label="Nome"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FieldsForms
                      component={TextField}
                      name="cliente"
                      id="cliente"
                      label="Cliente"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      name="dataInicial"
                      id="dataInicial"
                      label="Data Inicial"
                      value={new Date()}
                      onChange={(event) => setFieldValue('dataInicial', event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1.2} pt={2}>
                  <Grid item md={4} xs={12}>
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      name="dataVenda"
                      id="dataVenda"
                      label="Data Venda"
                      value={new Date()}
                      onChange={(event) => setFieldValue('dataVenda', event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      name="dataPrevisao"
                      id="dataPrevisao"
                      label="Data Prevista"
                      value={new Date()}
                      onChange={(event) => setFieldValue('dataPrevisao', event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      name="dataEntrega"
                      id="dataEntrega"
                      label="Data Entrega"
                      value={new Date()}
                      onChange={(event) => setFieldValue('dataEntrega', event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid container spacing={1.2} pt={2}>
                <Grid item md={12} xs={12}>
                  <FieldsForms
                    component={TextField}
                    id="descricao"
                    name="descricao"
                    label="Descricao"
                    fullWidth
                    multiline
                    maxRows={4}
                  />
                </Grid>
              </Grid>
              {botoesModal}
            </Form>
          )}
        </Formik>
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
