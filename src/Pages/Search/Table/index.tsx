import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalOptions from '../../../Components/ModalOptions';
import { conformToMask } from 'react-text-mask';
import {
  IconButton,
  TableContainer,
  TablePagination,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import {
  FuncionariosResponse,
  Funcionarios,
} from '../../../store/ducks/funcionarios/types';
import { ClientesResponse } from '../../../store/ducks/clientes/types';
import { EtapasResponse } from '../../../store/ducks/etapas/types';
import { ProjetoResponse } from '../../../store/ducks/projeto/types';
import { maskFormateCpfCnpj } from '../../../config/masks/cpf_cnpj_mask';
import { Delete, Edit } from '@mui/icons-material';
import { RootState } from '../../../store/ducks/rootReducer';
import { getClientesRequest } from '../../../store/ducks/clientes/actions';
import { getEtapasRequest } from '../../../store/ducks/etapas/actions';
import { getFuncionariosRequest } from '../../../store/ducks/funcionarios/actions';
import { getAllItemProjetoRequest } from '../../../store/ducks/itemProjeto/actions';
import { getProjetosRequest } from '../../../store/ducks/projeto/actions';
import TableCliente from './models/cliente';
import TableEtapa from './models/etapa';
import TableFuncionario from './models/funcionario';
import TableItemProjeto from './models/itemProjeto';
import TableProjeto from './models/projeto';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface OwnProps {
  handleFilter: (filter: any) => void;
  tipoFiltro: string;
  filter: any;
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { handleFilter, tipoFiltro, filter } = props;

  const renderModal = () => {
    switch (tipoFiltro) {
      case 'Cliente':
        return <TableCliente filter={filter} />;
      case 'Etapa':
        return <TableEtapa filter={filter} />;
      case 'Funcionario':
        return <TableFuncionario filter={filter} />;
      case 'Item':
        return <TableItemProjeto filter={filter} />;
      case 'Projeto':
        return <TableProjeto filter={filter} />;
    }
  };

  const actualModal = renderModal();

  return actualModal as ReactJSXElement;
};

export default TableData;
