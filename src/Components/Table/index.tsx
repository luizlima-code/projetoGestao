import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
];

interface OwnProps {
  height: number;
  titulo: string;
}

type Props = OwnProps;

const TableDashboard = (props: Props): React.ReactElement => {
  const { height, titulo } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: height,
      }}
    >
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>{titulo}</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDashboard;
