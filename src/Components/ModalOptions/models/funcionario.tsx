import {
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { BoxStyle, Buttons } from '../styles';
import { Form, Formik } from 'formik';
import FieldsForms from '../../FieldsForms';
import { TextField } from 'formik-material-ui';
import { postEtapasRequest } from '../../../store/ducks/etapas/actions';
import { TextMask } from '../../../config/masks/TextMask';
import { maskFormateCpfCnpj } from '../../../config/masks/cpf_cnpj_mask';
import { postFuncionariosRequest } from '../../../store/ducks/funcionarios/actions';

interface FuncTypes {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  senha?: string;
}

interface PropsTypes {
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void;
  title: string;
  id?: string;
}

const ModalFunc = ({
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

  return funcionariosModal;
};

export default ModalFunc;
