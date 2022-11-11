import { Delete, Edit } from '@mui/icons-material';
import {
  CircularProgress,
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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { conformToMask } from 'react-text-mask';
import ConfirmDialog from '../../../../Components/ConfirmDialog/ConfirmDialog';
import ModalOptions from '../../../../Components/ModalOptions';
import { maskFormateCpfCnpj } from '../../../../config/masks/cpf_cnpj_mask';
import { maskFormateTelefone } from '../../../../config/masks/telefone_mask';
import {
  deleteClienteRequest,
  getClientesRequest,
} from '../../../../store/ducks/clientes/actions';
import { ClienteCustomSearch } from '../../../../store/ducks/clientes/types';
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

interface OwnProps {
  filter: any;
}

type Props = OwnProps;

const TableCliente = (props: Props): React.ReactElement => {
  const { filter } = props;
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(filter?.pageSize || 10);
  const [page, setPage] = useState(filter?.pageNumber || 0);
  const isMobile = useMediaQuery('(max-width:959px)');

  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState('');

  const [openModal, setOpenModal] = React.useState(false);
  const [idDoModal, setIdDoModal] = React.useState('');

  const headers = ['Id', 'Nome', 'Email', 'CPF/CNPJ', 'Telefone', 'Ações'];
  const heightTable = isMobile ? 950 : '60vh';

  const { isLoading, clientes } = useSelector(
    (state: RootState) => state.clientes
  );
  const [listClientes, setListClientes] = useState(clientes.content);

  const formatCpfCnpj = (cpfCnpj: string) => {
    return conformToMask(cpfCnpj, maskFormateCpfCnpj, {}).conformedValue;
  };

  const formatTelefone = (cpfCnpj: string) => {
    return conformToMask(cpfCnpj, maskFormateTelefone, {}).conformedValue;
  };

  const handleOpenModalOptions = (title: string, id: string) => {
    setOpenModal(true);
    setIdDoModal(id);
  };

  const handleEditConfig = (configId: string) => {
    handleOpenModalOptions('Cliente', configId);
  };

  const handleOpenDelete = (configId: string) => {
    setOpen(true);
    setId(configId);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const handleOpenConfirmDelete = (configId: string) => {
    dispatch(deleteClienteRequest(configId));

    const clienteDeletado = listClientes.find((obj) => obj.id === configId);
    if (clienteDeletado != null) {
      const newList = listClientes.filter(
        (item) => item.id != clienteDeletado.id
      );
      setListClientes(newList);
    }

    handleCloseDelete();
  };

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

  const action = (configId: any) => {
    return (
      <>
        <Tooltip title="Editar" aria-label="edit">
          <IconButton
            style={{ color: '#00b4d8' }}
            onClick={() => handleEditConfig(configId)}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar" aria-label="delete">
          <IconButton
            style={{ color: '#00b4d8' }}
            onClick={() => handleOpenDelete(configId)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const customSearch: ClienteCustomSearch = {
    nome: filter.nome,
    cpf: filter.cpf,
    email: filter.email,
    pageNumber: page,
    pageSize: rowsPerPage,
  };

  useEffect(() => {
    dispatch(getClientesRequest(customSearch));
  }, [filter, listClientes]);

  const rows = listClientes?.map((row: ClienteTypes) => ({
    ...row,
    nome: row.nome,
    cpf: formatCpfCnpj(row.cpf),
    email: row.email,
    telefone: formatTelefone(row.telefone),
    actions: action(row.id),
  }));

  return (
    <>
      <Container>
        {isLoading && (
          <CircularProgress
            sx={{
              position: 'absolute',
              top: '70%',
              left: '60%',
              margin: '-20px 0 0 -20px',
            }}
          />
        )}
        {!isLoading && (
          <>
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
                        style={{
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
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row: any) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                        style={{ padding: '6px 16px' }}
                      >
                        {Object.values(row).map((object: any) => (
                          <TableCell align="center" style={{ fontSize: 16 }}>
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
          </>
        )}
      </Container>
      <ModalOptions
        title="Cliente"
        id={idDoModal}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
      <ConfirmDialog
        open={open}
        title="Apagar cliente"
        description="Deseja mesmo deletar os dados do cliente?"
        onOK={() => handleOpenConfirmDelete(id)}
        onCancel={handleCloseDelete}
        onClose={handleCloseDelete}
      />
    </>
  );
};

export default TableCliente;
