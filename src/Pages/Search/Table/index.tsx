import React from 'react';

import { Container } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableContainer, TablePagination, useMediaQuery } from '@mui/material';

function createData(
  name: string,
  calories: number,
  carbs: number,
  protein: number
) {
  return { name, calories, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 24, 4.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Frozen yoghurt', 159, 24, 4.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Frozen yoghurt', 159, 24, 4.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Frozen yoghurt', 159, 24, 4.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
  createData('Frozen yoghurt', 159, 24, 4.0),
  createData('Ice cream sandwich', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
];

interface OwnProps {
  titulo: string;
  headers: Array<string>;
  // data: Array<any>;
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { titulo, headers } = props;
  const isMobile = useMediaQuery('(max-width:959px)');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                {titulo}
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
