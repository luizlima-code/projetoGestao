import React, { useEffect, useState } from 'react';

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
import { useDispatch, useSelector } from 'react-redux';
import ModalOptions from '../../../../Components/ModalOptions';
import { RootState } from '../../../../store/ducks/rootReducer';
import { Container } from '../styles';
import {
  deleteEtapasRequest,
  getEtapasRequest,
} from '../../../../store/ducks/etapas/actions';
import { EtapaCustomSearch } from '../../../../store/ducks/etapas/types';
import ConfirmDialog from '../../../../Components/ConfirmDialog/ConfirmDialog';

interface EtapaTypes {
  id?: string;
  nome: string;
  descricao: string;
  actions?: () => void;
}

interface OwnProps {
  filter: any;
}

type Props = OwnProps;

const TableEtapa = (props: Props): React.ReactElement => {
  const { filter } = props;
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(filter?.pageSize || 10);
  const [page, setPage] = useState(filter?.pageNumber || 0);
  const isMobile = useMediaQuery('(max-width:959px)');

  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState('');

  const [openModal, setOpenModal] = React.useState(false);
  const [idDoModal, setIdDoModal] = React.useState('');

  const headers = ['Id', 'Nome', 'Descrição', 'Ações'];
  const heightTable = isMobile ? 950 : '60vh';

  const { isLoading, etapas } = useSelector((state: RootState) => state.etapas);
  const [listEtapas, setListEtapas] = useState(etapas.content);

  const handleOpenModalOptions = (title: string, id: string) => {
    setOpenModal(true);
    setIdDoModal(id);
  };

  const handleEditConfig = (configId: string) => {
    handleOpenModalOptions('Etapa', configId);
  };

  const handleOpenDelete = (configId: string) => {
    setOpen(true);
    setId(configId);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const handleOpenConfirmDelete = (configId: string) => {
    dispatch(deleteEtapasRequest(configId));

    const etapaDeletado = listEtapas.find((obj) => obj.id === configId);
    if (etapaDeletado != null) {
      const newList = listEtapas.filter((item) => item.id != etapaDeletado.id);
      setListEtapas(newList);
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
            color="primary"
            onClick={() => handleEditConfig(configId)}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Deletar" aria-label="delete">
          <IconButton
            color="primary"
            onClick={() => handleOpenDelete(configId)}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const customSearch: EtapaCustomSearch = {
    nome: filter.nome,
    pageNumber: page,
    pageSize: rowsPerPage,
  };

  useEffect(() => {
    dispatch(getEtapasRequest(customSearch));
  }, [filter, listEtapas]);

  const rows = listEtapas.map((row: EtapaTypes) => ({
    ...row,
    id: row.id,
    nome: row.nome,
    descricao: row.descricao,
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
          </>
        )}
      </Container>
      <ModalOptions
        title="Etapas"
        id={idDoModal}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
      <ConfirmDialog
        open={open}
        title="Apagar etapa"
        description="Deseja mesmo deletar os dados da etapa?"
        onOK={() => handleOpenConfirmDelete(id)}
        onCancel={handleCloseDelete}
        onClose={handleCloseDelete}
      />
    </>
  );
};

export default TableEtapa;
