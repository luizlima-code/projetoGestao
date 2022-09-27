import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  calories: number,
  carbs: number,
  protein: number
) {
  return { name, calories, carbs, protein };
}

const rows = [
  createData('aFrozen yoghurt', 159, 24, 4.0),
  createData('bIce cream sandwich', 237, 37, 4.3),
  createData('cEclair', 262, 24, 6.0),
  createData('dFrozen ayoghurt', 159, 24, 4.0),
  createData('eIce cream sandwich', 237, 37, 4.3),
  createData('fEclairs', 262, 24, 6.0),
  createData('hFrozens yoghurt', 159, 24, 4.0),
  createData('gIces creams sandwich', 237, 37, 4.3),
  createData('iEclairas', 262, 24, 6.0),
];

interface OwnProps {
  height: number;
  titulo: string;
  headers: Array<string>;
  // data: Array<any>;
}

type Props = OwnProps;

const TableDashboard = (props: Props): React.ReactElement => {
  const { height, titulo, headers } = props;

  return (
    <TableContainer
      sx={{
        overflowY: 'hidden',
        overflowX: 'hidden',
        height: height,
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
                fontSize: 16,
              }}
            >
              {titulo}
            </TableCell>
            {headers.map((row) => (
              <TableCell
                key={row}
                align="center"
                sx={{
                  backgroundColor: '#00b4d8',
                  color: 'white',
                  fontSize: 16,
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
  );
};

export default TableDashboard;
