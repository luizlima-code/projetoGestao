import React from 'react';

import { Container } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableContainer, TablePagination, useMediaQuery } from '@mui/material';
import { FuncionariosResponse } from '../../../store/ducks/funcionarios/types';
import { ClientesResponse } from '../../../store/ducks/clientes/types';
import { EtapasResponse } from '../../../store/ducks/etapas/types';
import { ProjetoResponse } from '../../../store/ducks/projeto/types';

function createData(
  name: string,
  calories: number,
  carbs: number,
  protein: number,
  novo?: number
) {
  return { name, calories, carbs, protein, novo };
}

const rows = [
  createData('aFrozen yoghurt', 159, 24, 4.0),
  createData('bIce cream sandwich', 237, 37, 4.3),
  createData('cEclair', 262, 24, 6.0),
  createData('dFrozen yoghurt', 159, 24, 4.0),
  createData('eIce cream sandwich', 237, 37, 4.3),
  createData('fEclair', 262, 24, 6.0),
  createData('gFrozen yoghurt', 159, 24, 4.0),
  createData('hIce cream sandwich', 237, 37, 4.3),
  createData('iEclair', 262, 24, 6.0),
  createData('kIce cream sandwich', 237, 37, 4.3),
  createData('lEclair', 262, 24, 6.0),
  createData('jFrozen yoghurt', 159, 24, 4.0),
  createData('mIce cream sandwich', 237, 37, 4.3),
  createData('nEclair', 262, 24, 6.0),
  createData('oIce cream sandwich', 237, 37, 4.3),
  createData('qEclair', 262, 24, 6.0),
  createData('yFrozen yoghurt', 159, 24, 4.0),
  createData('xIce cream sandwich', 237, 37, 4.3),
  createData('zEclair', 262, 24, 6.0),
];

interface OwnProps {
  handleFilter: (filter: any) => void;
  tipoFiltro: string;
  headers: Array<string>;
  data?: FuncionariosResponse |
  ClientesResponse |
  EtapasResponse |
  ProjetoResponse;
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { headers, handleFilter, tipoFiltro, data } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const isMobile = useMediaQuery('(max-width:959px)');


  // const rows = data?.content?.map(row => ({
  //   ...row,
  //   id: row.transactionId,
  //   transactionTypeDescription: getTransactionTypesTranslation(
  //     row?.transactionType
  //   ),
  //   transactionStatusDescription: getTransactionStatusTranslation(
  //     row?.transactionStatus
  //   ),
  //   mipStatusDescription: row?.mipStatus?.description || '',
  //   dateTime: formatDate(row?.dateTime, true),
  //   payerBranchAccount: `${row?.payerDetails?.branch || ''}/${row?.payerDetails
  //     ?.account || ''}`,
  //   payerName: row?.payerDetails?.name || '',
  //   payerTaxId: formatCpfCnpj(row?.payerDetails?.taxId) || '',
  //   receiverName: row?.receiverDetails?.name || '',
  //   receiverTaxId: formatCpfCnpj(row?.receiverDetails?.taxId) || '',
  //   actions: action(row.transactionId),
  //   amount: formatCurrency(parseFloat(row.amount)),
  //   checkDisabled: !row.canBeReprocessed,
  // }));

  const handleChangePage = (event: unknown, newPage: number) => {
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
              <TableCell
                sx={{
                  backgroundColor: '#00b4d8',
                  color: 'white',
                  fontSize: 20,
                  border: 'none',
                }}
              >
                {tipoFiltro}
              </TableCell>
              {headers.map((header) => (
                <TableCell
                  align="center"
                  sx={{
                    border: 'none',
                    backgroundColor: '#00b4d8',
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  {Object.values(row).map((object) => (
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default TableData;
