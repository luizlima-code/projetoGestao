import React from 'react';

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

interface ClientesTypes {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  actions?: () => void;
}

interface OwnProps {
  handleFilter: (filter: any) => void;
  tipoFiltro: string;
  headers: Array<string>;
  data?: ClientesResponse;
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { headers, handleFilter, tipoFiltro, data } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const isMobile = useMediaQuery('(max-width:959px)');

  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [idDoModal, setIdDoModal] = React.useState('');
  const handleOpen = () => setOpenModal(true);

  const formatCpfCnpj = (cpfCnpj: string) => {
    return conformToMask(cpfCnpj, maskFormateCpfCnpj, {}).conformedValue;
  };

  const handleOpenModalOptions = (title: string, id: string) => {
    handleOpen();
    setTitle(title);
    setIdDoModal(id);
  };

  const handleEditConfig = (configId: string) => {
    handleOpenModalOptions('Cliente', configId);
  };

  // caso a parte
  const handleOpenConfirmDelete = (configId: string) => {
    setOpen(true);
    // setIdDelete(configId);
  };

  const action = (configId: any) => {
    return (
      <>
        <Tooltip title="Editar" aria-label="edit">
          <IconButton
            color="primary"
            onClick={() => handleEditConfig(configId)}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar" aria-label="delete">
          <IconButton
            color="primary"
            onClick={() => handleOpenConfirmDelete(configId)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </>
    );
  };
  const headerClienteEFuncionario = [
    'Nome',
    'Cpf',
    'Email',
    'Telefone',
    'Ações',
  ];

  const headerEtapa = ['Nome', 'Descrição', 'Ações'];

  const headerItem = ['Nome', 'Codigo', 'Projeto', 'Ações'];

  const headerProjeto = ['Nome', 'Descrição', 'Data Venda', 'Cliente', 'Ações'];

  const headerTable = () => {
    switch (tipoFiltro) {
      case 'Cliente':
        return headerClienteEFuncionario;
      case 'Etapa':
        return headerEtapa;
      case 'Funcionario':
        return headerClienteEFuncionario;
      case 'Item':
        return headerItem;
      case 'Projeto':
        return headerProjeto;
      default:
        return headerClienteEFuncionario;
    }
  };

  // const rows = data?.content?.map((row) => ({
  //   ...row,
  //   // id: row.id,
  //   nome: row.nome,
  //   cliente: {
  //     id: row.cliente.id,
  //     nome: row.id,
  //     cpf: formatCpfCnpj(row.cliente.cpf),
  //     email: row.cliente.email,
  //     telefone: row.cliente.telefone,
  //   },
  //   dataEntrega: row.dataEntrega,
  //   dataInicial: row.dataInicial,
  //   dataPrevisao: row.dataPrevisao,
  //   dataVenda: row.dataVenda,
  //   descricao: row.descricao,
  // }));

  const rows = data?.content?.map((row: ClientesTypes) => ({
    ...row,
    nome: row.nome,
    cpf: formatCpfCnpj(row.cpf),
    email: row.email,
    telefone: row.telefone,
    actions: action(row.id),
  }));

  //  const rows = data?.content?.map(row => ({
  //    ...row,
  //    // id: row.id,
  //    nome: row.nome,
  //    descricao: row.descricao,
  //  }));

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const heightTable = isMobile ? 950 : '60vh';

  return (
    <>
      <Container>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 4,
            maxHeight: heightTable,
          }}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                {headerTable().map((header) => (
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: '#00b4d8',
                      color: 'white',
                      fontSize: 20,
                      border: 'none',
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    {Object.values(row).map((object: any) => (
                      <TableCell
                        align="center"
                        sx={{
                          ':first-child': {
                            textAlign: 'initial',
                          },
                          fontSize: 16,
                        }}
                      >
                        {object}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="Quantidade:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} de ${count !== -1 ? count : `more than ${to}`}`
          }
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows ? rows.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
      <ModalOptions
        title={title}
        id={idDoModal}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
    </>
  );
};

export default TableData;
