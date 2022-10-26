import React, { useEffect, useState } from 'react';

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
import { useDispatch, useSelector } from 'react-redux';
import ModalOptions from '../../../../Components/ModalOptions';
import { RootState } from '../../../../store/ducks/rootReducer';
import { Container } from '../styles';
import { getProjetosRequest } from '../../../../store/ducks/projeto/actions';
import { Clientes } from '../../../../store/ducks/clientes/types';
import { ProjetoCustomSearch } from '../../../../store/ducks/projeto/types';

interface ProjetoTypes {
  cliente: Clientes;
  dataEntrega: string;
  dataPrevisao: string;
  dataInicial: string;
  dataVenda: string;
  descricao: string;
  id?: string;
  nome: string;
  actions?: () => void;
}

interface OwnProps {
  filter: any;
}

type Props = OwnProps;

const TableProjeto = (props: Props): React.ReactElement => {
  const { filter } = props;
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(filter?.pageSize || 10);
  const [page, setPage] = useState(filter?.pageNumber || 0);
  const isMobile = useMediaQuery('(max-width:959px)');

  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [idDoModal, setIdDoModal] = React.useState('');
  const handleOpen = () => setOpenModal(true);

  const headers = ['Id', 'Nome', 'Data Venda', 'Cliente', 'Descrição', 'Ações'];
  const heightTable = isMobile ? 950 : '60vh';

  const { isLoading, projetos } = useSelector(
    (state: RootState) => state.projeto
  );

  const handleOpenModalOptions = (title: string, id: string) => {
    handleOpen();
    setIdDoModal(id);
  };

  const handleEditConfig = (configId: string) => {
    handleOpenModalOptions('Projeto', configId);
  };

  const handleOpenConfirmDelete = (configId: string) => {
    setOpen(true);
    // setIdDelete(configId);
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

  const customSearch: ProjetoCustomSearch = {
    nomeCliente: filter.nomeCliente,
    nome: filter.nome,
    pageNumber: page,
    pageSize: rowsPerPage,
  };

  useEffect(() => {
    dispatch(getProjetosRequest(customSearch));
  }, [getProjetosRequest]);
  console.log('Projetos: ', projetos);

  const rows = projetos?.content?.map((row: ProjetoTypes) => ({
    id: row.id,
    nome: row.nome,
    dataVenda: row.dataVenda,
    cliente: row.cliente.nome,
    descricao: row.descricao,
    actions: action(row.id),
  }));

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
        title="Projeto"
        id={idDoModal}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
    </>
  );
};

export default TableProjeto;
