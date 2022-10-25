import React from 'react';

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

interface IFilters {
  handleFilter: (filter: any) => void;
  setTipoFiltro: (data: any) => void;
}

const FilterData = ({
  handleFilter,
  setTipoFiltro,
}: IFilters): React.ReactElement => {
  const [modulo, setModulo] = React.useState('Cliente');

  const handleChange = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  const FilterCliente = (
    <Grid container spacing={1}>
      <Grid item md={4} xs={12}>
        <TextField
          name="cliNome"
          id="cliNome"
          label="Nome"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="cliCpf"
          id="cliCpf"
          label="CPF"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="cliEmail"
          id="cliEmail"
          label="Email"
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );

  const FilterEtapas = (
    <Grid container spacing={1}>
      <Grid item md={12} xs={12}>
        <TextField
          name="etapaNome"
          id="etapaNome"
          label="Nome"
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );

  const FilterFuncionario = (
    <Grid container spacing={1}>
      <Grid item md={3} xs={12}>
        <TextField
          name="funcNome"
          id="funcNome"
          label="Nome"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          name="funcCpf"
          id="funcCpf"
          label="Cpf"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          name="funcEmail"
          id="funcEmail"
          label="Email"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          name="funcTelefone"
          id="funcTelefone"
          label="Telefone"
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );

  const FilterItem = (
    <Grid container spacing={1}>
      <Grid item md={4} xs={12}>
        <TextField
          name="itemNome"
          id="itemNome"
          label="Nome"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="itemCodigo"
          id="itemCodigo"
          label="Codigo"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="itemProjeto"
          id="itemProjeto"
          label="Projeto"
          fullWidth
          size="small"
        />
      </Grid>
    </Grid>
  );

  const FilterProjeto = (
    <Grid container spacing={1}>
      <Grid item md={4} xs={12}>
        <TextField
          name="projNome"
          id="projNome"
          label="Nome"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="projCliente"
          id="projCliente"
          label="Cliente"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          name="projDataVenda"
          id="projDataVenda"
          label="Data Venda"
          fullWidth
          size="small"
        />
      </Grid>
      {/* <Grid item md={2} xs={12}>
        <TextField
          name="projDataPrevista"
          id="projDataPrevista"
          label="Data Prevista"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          name="projDataEntrega"
          id="projDataEntrega"
          label="Data Entrega"
          fullWidth
          size="small"
        />
      </Grid> */}
    </Grid>
  );

  const handleFilterBuscar = () => {
    handleFilter(modulo);
  };

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
      {renderModal()}
      <Buttons>
        <Button
          variant="contained"
          sx={{ mt: 2, mr: 2 }}
          size="small"
          color="inherit"
          style={{ backgroundColor: '#dedede', fontWeight: 300 }}
        >
          Limpar
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          size="small"
          onClick={handleFilterBuscar}
          style={{ backgroundColor: '#00b4d8', fontWeight: 'bold' }}
          endIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </Buttons>
    </Container>
  );
};

export default FilterData;
