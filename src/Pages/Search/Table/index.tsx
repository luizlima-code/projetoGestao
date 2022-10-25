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
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { handleFilter, tipoFiltro } = props;

  const renderModal = () => {
    switch (tipoFiltro) {
      case 'Cliente':
        return <TableCliente />;
      case 'Etapa':
        return <TableEtapa />;
      case 'Funcionario':
        return <TableFuncionario />;
      case 'Item':
        return <TableItemProjeto />;
      case 'Projeto':
        return <TableProjeto />;
    }
  };

  const actualModal = renderModal();

  return actualModal as ReactJSXElement;
};

export default TableData;
