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
import { BoxStyle, Buttons } from '../styles';
import { Form, Formik } from 'formik';
import FieldsForms from '../../FieldsForms';
import { TextField } from 'formik-material-ui';
import { postEtapasRequest } from '../../../store/ducks/etapas/actions';
import {
  getAllProjetosRequest,
  postItemProjetoRequest,
} from '../../../store/ducks/projeto/actions';
import { RootState } from '../../../store/ducks/rootReducer';
import SelectForms from '../../SelectForms';

interface ItemTypes {
  codigo: string;
  id?: string;
  nome: string;
  projeto: { id: any };
}

interface PropsTypes {
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void;
  title: string;
  id?: string;
}

const ModalItens = ({
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

  const initial_values_item = {
    codigo: '',
    nome: '',
    projeto: { id: '0' },
  };

  useEffect(() => {
    dispatch(getAllProjetosRequest());
  }, [getAllProjetosRequest]);

  const { allProjetos } = useSelector((state: RootState) => state.projeto);

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

  return itemModal;
};

export default ModalItens;
