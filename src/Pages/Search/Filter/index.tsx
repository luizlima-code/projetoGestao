import React, { useRef, useEffect } from 'react';

import { Buttons, Container } from './styles';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useFormik } from 'formik';

interface IFilters {
  handleFilter: (filter: any) => void;
  setTipoFiltro: (data: any) => void;
}

const FilterData = ({
  handleFilter,
  setTipoFiltro,
}: IFilters): React.ReactElement => {
  const [modulo, setModulo] = React.useState('Cliente');

  const defaultFilter = {
    nome: '',
    email: '',
    cpf: '',
    nomeCliente: '',
    ativos: true,
    pageNumber: 0,
    pageSize: 10,
  };

  const handleChange = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
    handleReset();
  };

  const formik = useFormik({
    initialValues: defaultFilter,
    onSubmit: (values) => (handleFilter(values), console.log(values)),
  });

  const handleReset = () => {
    formik.resetForm();
    handleFilter({
      pageNumber: 0,
      pageSize: 10,
    });
  };

  const FilterCliente = (
    <Grid container spacing={1}>
      <Grid item md={4} xs={12}>
        <TextField
          name="nome"
          id="nome"
          label="Nome"
          fullWidth
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="cpf"
          id="cpf"
          label="CPF/CNPJ"
          fullWidth
          size="small"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          // InputProps={{
          //   inputComponent: TextMask,
          // }}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="email"
          id="email"
          label="Email"
          fullWidth
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );

  const FilterEtapas = (
    <Grid container spacing={1}>
      <Grid item md={12} xs={12}>
        <TextField
          name="nome"
          id="nome"
          label="Nome"
          fullWidth
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );

  const FilterFuncionario = (
    <Grid container spacing={1}>
      <Grid item md={4} xs={12}>
        <TextField
          name="nome"
          id="nome"
          label="Nome"
          fullWidth
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="cpf"
          id="cpf"
          label="CPF/CNPJ"
          fullWidth
          size="small"
          value={formik.values.cpf}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="email"
          id="email"
          label="Email"
          fullWidth
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );

  const FilterItem = (
    <Grid container spacing={1}>
      <Grid item md={12} xs={12}>
        <TextField
          name="nome"
          id="nome"
          label="Nome"
          fullWidth
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );

  const FilterProjeto = (
    <Grid container spacing={1}>
      <Grid item md={5} xs={12}>
        <TextField
          name="nome"
          id="nome"
          label="Nome"
          fullWidth
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item md={5} xs={12}>
        <TextField
          name="nomeCliente"
          id="nomeCliente"
          label="Cliente"
          fullWidth
          size="small"
          value={formik.values.nomeCliente}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <Select
          size="small"
          fullWidth
          displayEmpty
          name="ativos"
          id="ativos"
          value={formik.values.ativos}
          onChange={formik.handleChange}
        >
          <MenuItem value={true as any}>Ativos</MenuItem>
          <MenuItem value={false as any}>Inativos</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );

  const renderModal = () => {
    switch (modulo) {
      case 'Cliente':
        return setTipoFiltro('Cliente'), FilterCliente as ReactJSXElement;
      case 'Etapa':
        return setTipoFiltro('Etapa'), FilterEtapas as ReactJSXElement;
      case 'Funcionario':
        return (
          setTipoFiltro('Funcionario'), FilterFuncionario as ReactJSXElement
        );
      case 'Item':
        return setTipoFiltro('Item'), FilterItem as ReactJSXElement;
      case 'Projeto':
        return setTipoFiltro('Projeto'), FilterProjeto as ReactJSXElement;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Grid item mb={2}>
          <Typography id="modal-modal-title" variant="h4" component="h5">
            Pesquisar
          </Typography>
        </Grid>
        <Grid item mb={2}>
          <Buttons>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h6"
              mr={2}
            >
              Modulos:
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={modulo}
              onChange={handleChange}
              sx={{ minWidth: 120 }}
              size="small"
            >
              <MenuItem value={'Cliente'}>Cliente</MenuItem>
              <MenuItem value={'Etapa'}>Etapa</MenuItem>
              <MenuItem value={'Funcionario'}>Funcionario</MenuItem>
              <MenuItem value={'Item'}>Item</MenuItem>
              <MenuItem value={'Projeto'}>Projeto</MenuItem>
            </Select>
          </Buttons>
        </Grid>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
        {renderModal()}
        <Buttons>
          <Button
            variant="contained"
            sx={{ mt: 2, mr: 2 }}
            size="small"
            color="inherit"
            style={{ backgroundColor: '#dedede', fontWeight: 300 }}
            onClick={handleReset}
          >
            Limpar
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            size="small"
            type="submit"
            style={{ backgroundColor: '#00b4d8', fontWeight: 'bold' }}
            endIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </Buttons>
      </form>
    </Container>
  );
};

export default FilterData;
