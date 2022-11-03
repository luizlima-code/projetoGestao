import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AgendaDiaEAtrasados } from '../../store/ducks/etapaProjeto/types';
import { Projetos } from '../../store/ducks/projeto/types';

interface OwnProps {
  height?: any;
  headers: Array<string>;
  data1?: AgendaDiaEAtrasados[];
  data2?: Projetos[];
}

type Props = OwnProps;

const TableDashboard = (props: Props): React.ReactElement => {
  const { height, headers, data1, data2 } = props;

  const rows1 = data1?.map((row) => ({
    // ...row,
    id: row.idEtapa,
    nome: row.nome,
    itens: [
      row.itens.length === 0
        ? 'sem itens'
        : row.itens.map((item) => `${item.nomeItem}, `),
    ],
  }));

  const rows2 = data2?.map((row) => ({
    // ...row,
    id: row.id,
    nome: row.nome,
    dataEntrega: row.dataPrevisao,
  }));

  const rows = rows1 != null ? rows1 : rows2;

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
              {Object.values(row).map((object: any) => (
                <TableCell
                  align="center"
                  sx={{
                    // ':first-child': {
                    //   textAlign: 'initial',
                    // },
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
