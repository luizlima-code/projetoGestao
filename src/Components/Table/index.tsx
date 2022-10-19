import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AgendaDiaEAtrasados } from '../../store/ducks/etapaProjeto/types';
import { Projetos } from '../../store/ducks/projeto/types';

function createData(
  name: string,
  calories: number,
  carbs: number,
  protein: number
) {
  return { name, calories, carbs, protein };
}

interface OwnProps {
  height?: any;
  headers: Array<string>;
  data?: AgendaDiaEAtrasados[];
  // | Projetos[];
}

type Props = OwnProps;

const TableDashboard = (props: Props): React.ReactElement => {
  const { height, headers, data } = props;

  const rows = data?.map((row) => ({
    ...row,
    nome: row.nome,
    itens: row.itens.map((itens) => ({
      codigo: itens.codigo,
      item: itens.nomeItem,
      projeto: itens.nomeProjeto,
    })),
  }));

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
            {headers.map((row) => (
              <TableCell
                align="center"
                sx={{
                  backgroundColor: '#00b4d8',
                  color: 'white',
                  fontSize: 16,
                  border: 'none',
                }}
              >
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.nome}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              {Object.values(row.itens).map((object: any) => (
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
