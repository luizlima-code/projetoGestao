import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
// import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { RootState } from '../../store/ducks/rootReducer';
import Modal from '@mui/material/Modal';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { BoxStyle, Buttons, TextData } from './styles';
import { Grid, IconButton, useMediaQuery, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { postFuncionariosRequest } from '../../store/ducks/funcionarios/actions';
import FieldsForms from '../FieldsForms';
import { TextField } from 'formik-material-ui';
import {
  getClientesFilterRequest,
  postClientesRequest,
} from '../../store/ducks/clientes/actions';
import { postEtapasRequest } from '../../store/ducks/etapas/actions';
import SelectForms from '../SelectForms';
import { format } from 'date-fns';
import {
  getAllProjetosRequest,
  postItemProjetoRequest,
  postProjetosRequest,
} from '../../store/ducks/projeto/actions';
import { TextMask } from '../../config/masks/TextMask';
import { maskFormateCpfCnpj } from '../../config/masks/cpf_cnpj_mask';

interface FuncTypes {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha?: string;
}
interface ItemTypes {
  codigo: string;
  id?: string;
  nome: string;
  projeto: { id: any };
}

interface EtapaTypes {
  descricao: string;
  nome: string;
}

interface ProjetoTypes {
  cliente: { id: any };
  nome: string;
  dataVenda: string | any;
  dataPrevisao: string | any;
  dataEntrega: string | any;
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

  const initial_values_cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
  };

  const initial_values_etapa = {
    nome: '',
    descricao: '',
  };

  const initial_values_item = {
    codigo: '',
    nome: '',
    projeto: { id: '0' },
  };

  const initial_values_projeto = {
    nome: '',
    cliente: {
      id: '0',
    },
    dataVenda: new Date(),
    dataPrevisao: new Date(),
    dataEntrega: null,
    descricao: '',
  };

  // aqui será exemplo inicio

  useEffect(() => {
    dispatch(getClientesFilterRequest());
  }, [getClientesFilterRequest]);

  useEffect(() => {
    dispatch(getAllProjetosRequest());
  }, [getAllProjetosRequest]);

  // aqui será exemplo fim

  const { clientesFilter } = useSelector((state: RootState) => state.clientes);
  const { allProjetos } = useSelector((state: RootState) => state.projeto);

  const handlePostFunc = (values: FuncTypes, setSubmitting: any) => {
    const cpf = values.cpf
      .replaceAll('.', '')
      .replaceAll('-', '')
      .replaceAll('/', '');
    const telefone = values.telefone
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '')
      .replaceAll(' ', '');

    const payload = {
      nome: values.nome,
      cpf: cpf,
      email: values.email,
      telefone: telefone,
      senha: values.senha,
    };

    dispatch(postFuncionariosRequest(payload));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostCliente = (values: FuncTypes, setSubmitting: any) => {
    const cpf = values.cpf
      .replaceAll('.', '')
      .replaceAll('-', '')
      .replaceAll('/', '');
    const telefone = values.telefone
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '')
      .replaceAll(' ', '');

    const payload = {
      nome: values.nome,
      cpf: cpf,
      email: values.email,
      telefone: telefone,
    };

    dispatch(postClientesRequest(payload));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostEtapa = (values: EtapaTypes, setSubmitting: any) => {
    dispatch(postEtapasRequest(values));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostItem = (values: ItemTypes, setSubmitting: any) => {
    const payload = {
      codigo: values.codigo,
      nome: values.nome,
      projeto: { id: values.projeto.id },
    };

    dispatch(postItemProjetoRequest(payload));
    setSubmitting();
    setOpenModal(false);
  };

  const handlePostProjeto = (values: ProjetoTypes, setSubmitting: any) => {
    const dataEntrega =
      values.dataEntrega != null
        ? format(values.dataEntrega, 'dd/MM/yyyy hh:mm')
        : null;
    const dataPrevisao = format(values.dataPrevisao, 'dd/MM/yyyy hh:mm');
    const dataVenda = format(values.dataVenda, 'dd/MM/yyyy hh:mm');

    const payload = {
      cliente: { id: values.cliente?.id },
      nome: values.nome,
      dataVenda: dataVenda,
      dataPrevisao: dataPrevisao,
      dataEntrega: dataEntrega,
      descricao: values.descricao,
    };

    dispatch(postProjetosRequest(payload));
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
          initialValues={initial_values_cliente}
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
                  required
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
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="cpf"
                  id="cpf"
                  label="CPF"
                  InputProps={{
                    inputComponent: TextMask,
                    inputProps: { mask: maskFormateCpfCnpj },
                  }}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="email"
                  id="email"
                  label="Email"
                  type="email"
                  required
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
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="descricao"
                  id="descricao"
                  label="Descrição"
                  required
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
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="senha"
                  id="senha"
                  label="Senha"
                  type="password"
                  required
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
                  label="CPF"
                  InputProps={{
                    inputComponent: TextMask,
                    inputProps: { mask: maskFormateCpfCnpj },
                  }}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  name="email"
                  component={TextField}
                  id="email"
                  label="Email"
                  type="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  name="telefone"
                  component={TextField}
                  id="telefone"
                  label="Telefone"
                  required
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
          initialValues={initial_values_item}
          onSubmit={(values: ItemTypes, { setSubmitting }) => {
            handlePostItem(values, setSubmitting);
          }}
        >
          <Form>
            <Grid container spacing={1.2}>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="nome"
                  id="nome"
                  label="Nome"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={TextField}
                  name="codigo"
                  id="codigo"
                  label="Codigo"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FieldsForms
                  component={SelectForms}
                  variant="standard"
                  name="projeto"
                  id="projeto"
                  label="Projeto"
                  size="small"
                  fullWidth
                  required
                >
                  {allProjetos.map((res: any) => (
                    <MenuItem key={res.id} value={res}>
                      {res.nome}
                    </MenuItem>
                  ))}
                </FieldsForms>
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                      component={SelectForms}
                      name="cliente"
                      id="cliente"
                      label="Cliente"
                      variant="standard"
                      fullWidth
                      required
                    >
                      {clientesFilter.map((res: any) => (
                        <MenuItem key={res.id} value={res}>
                          {res.nome}
                        </MenuItem>
                      ))}
                    </FieldsForms>
                  </Grid>
                </Grid>
                <Grid container spacing={1.2} pt={2}>
                  <Grid item md={4} xs={12}>
                    <DateTimePicker
                      ampm={false}
                      renderInput={(props) => (
                        <TextData
                          {...props}
                          id="dataVenda"
                          name="dataVenda"
                          size="small"
                          variant="standard"
                          fullWidth
                        />
                      )}
                      label="Data Venda"
                      value={values.dataVenda}
                      onChange={(event) => setFieldValue('dataVenda', event)}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <DateTimePicker
                      ampm={false}
                      renderInput={(props) => (
                        <TextData
                          {...props}
                          name="dataPrevisao"
                          id="dataPrevisao"
                          size="small"
                          variant="standard"
                          fullWidth
                        />
                      )}
                      label="Data Prevista"
                      value={values.dataPrevisao}
                      onChange={(event) => setFieldValue('dataPrevisao', event)}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <DateTimePicker
                      inputFormat="dd/MM/yyyy hh:mm"
                      ampm={false}
                      renderInput={(props) => (
                        <TextData
                          {...props}
                          name="dataEntrega"
                          id="dataEntrega"
                          size="small"
                          variant="standard"
                          fullWidth
                        />
                      )}
                      label="Data Entrega"
                      value={values.dataEntrega}
                      onChange={(event) => setFieldValue('dataEntrega', event)}
                      minDateTime={values.dataVenda}
                      disabled
                    />
                  </Grid>
                </Grid>
              </LocalizationProvider>
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

  return renderModal() as React.ReactElement;
};

export default ModalOptions;
