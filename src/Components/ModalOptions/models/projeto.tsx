import {
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
  MenuItem,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { BoxStyle, Buttons, TextData } from '../styles';
import { Form, Formik } from 'formik';
import FieldsForms from '../../FieldsForms';
import { TextField } from 'formik-material-ui';
import { postProjetosRequest } from '../../../store/ducks/projeto/actions';
import { format } from 'date-fns';
import { RootState } from '../../../store/ducks/rootReducer';
import SelectForms from '../../SelectForms';
import { getClientesFilterRequest } from '../../../store/ducks/clientes/actions';
import DateFnsUtils from '@date-io/date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

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

const ModalProjeto = ({
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

  useEffect(() => {
    dispatch(getClientesFilterRequest());
  }, [getClientesFilterRequest]);

  const { clientesFilter } = useSelector((state: RootState) => state.clientes);

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

  return projetoModal;
};

export default ModalProjeto;
