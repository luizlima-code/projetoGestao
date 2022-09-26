import React from 'react';

import { Container } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableContainer } from '@mui/material';

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

  return (
    <Container>
      <TableContainer
        component={Paper}
        sx={{
          overflowY: 'hidden',
          overflowX: 'hidden',
          height: 350,
          borderRadius: 4,

          ':hover': { overflowY: 'auto' },
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
                }}
              >
                {titulo}
              </TableCell>
              {headers.map((row) => (
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: '#00b4d8',
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  {row}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
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
    </Container>
  );
};

export default TableData;
