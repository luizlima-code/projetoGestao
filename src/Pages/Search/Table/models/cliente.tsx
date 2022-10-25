import { Delete, Edit } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { conformToMask } from 'react-text-mask';
import ModalOptions from '../../../../Components/ModalOptions';
import { maskFormateCpfCnpj } from '../../../../config/masks/cpf_cnpj_mask';
import { getClientesRequest } from '../../../../store/ducks/clientes/actions';
import { ClientesResponse } from '../../../../store/ducks/clientes/types';
import { RootState } from '../../../../store/ducks/rootReducer';
import { Container } from '../styles';

interface ClienteTypes {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  actions?: () => void;
}

const TableCliente = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const isMobile = useMediaQuery('(max-width:959px)');

  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [idDoModal, setIdDoModal] = React.useState('');
  const handleOpen = () => setOpenModal(true);

  const formatCpfCnpj = (cpfCnpj: string) => {
    return conformToMask(cpfCnpj, maskFormateCpfCnpj, {}).conformedValue;
  };

  const handleOpenModalOptions = (title: string, id: string) => {
    handleOpen();
    setIdDoModal(id);
  };

  const handleEditConfig = (configId: string) => {
    handleOpenModalOptions('Cliente', configId);
  };

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

  const headers = ['Id', 'Nome', 'Email', 'CPF/CNPJ', 'Telefone', 'Ações'];

  const { isLoading, clientes } = useSelector(
    (state: RootState) => state.clientes
  );

  useEffect(() => {
    dispatch(getClientesRequest());
  }, [getClientesRequest]);
  console.log('Clientes: ', clientes);

  const rows = clientes.content?.map((row: ClienteTypes) => ({
    ...row,
    nome: row.nome,
    cpf: formatCpfCnpj(row.cpf),
    email: row.email,
    telefone: row.telefone,
    actions: action(row.id),
  }));

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
                {headers.map((header) => (
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
        title="Cliente"
        id={idDoModal}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
    </>
  );
};

export default TableCliente;