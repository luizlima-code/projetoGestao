import React, { useEffect } from 'react';

import { Container, DivGrid } from './styles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Button, Grid } from '@mui/material';
import TableDashboard from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFuncionariosRequest,
  getByIdFuncionariosRequest,
} from '../../store/ducks/funcionarios/actions';
import { RootState } from '../../store/ducks/rootReducer';
import {
  getGraficoPrazoAtrasadoRequest,
  getProjetosAtrasadosRequest,
} from '../../store/ducks/projeto/actions';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 3,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Desempenho',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 206, 86)',
    },
  ],
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const { funcionarios, funcionarioById, isLoading } = useSelector(
    (state: RootState) => state.funcionarios
  );

  const { prazoVsAtrasos } = useSelector((state: RootState) => state.projeto);

  const filters = {
    dataFinal: '22/10/2022',
    dataInicial: '22/02/2022',
  };

  useEffect(() => {
    // dispatch(getProjetosAtrasadosRequest());
    console.log('Dashboard ', filters);
    dispatch(getGraficoPrazoAtrasadoRequest(filters));
  }, []);

  const data2 = {
    labels: ['Dentro prazo', 'Atrasados'],
    datasets: [
      {
        label: '# projetos',
        data: [prazoVsAtrasos.noPrazo * 100, prazoVsAtrasos.foraDoPrazo * 100],
        backgroundColor: ['#0077b6', 'rgba(255, 206, 86)'],
        borderWidth: 6,
      },
    ],
  };

  const handleTesteGet = async () => {
    console.log('funcionarios: ', funcionarios);
    console.log('funcionarios by id: ', funcionarioById);
    console.log('isloading: ', isLoading);
  };

  return (
    <Container>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        mb={2}
        spacing={2}
      >
        <Grid item md={5} xs={12}>
          <DivGrid>
            <TableDashboard
              height="65vh"
              headers={['Nome', 'Codigo', 'Item', 'Projeto']}
            />
          </DivGrid>
        </Grid>
        <Grid
          item
          md={7}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Grid item>
            <DivGrid style={{ padding: 8 }}>
              <Bar options={options} data={data} />
            </DivGrid>
          </Grid>
          <Grid item mt={2}>
            <DivGrid>
              <TableDashboard
                height="30vh"
                headers={['Projeto Atrasado', 'Data da entrega']}
              />
            </DivGrid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3.5} xs={12}>
          <DivGrid>
            <Doughnut data={data2} />
          </DivGrid>
        </Grid>
        <Grid item md={8.5} xs={12}>
          <DivGrid>
            <TableDashboard
              height="48vh"
              headers={['Nome', 'Codigo', 'Item', 'Projeto', 'Data da Entrega']}
            />
          </DivGrid>
        </Grid>
      </Grid>
      <Button onClick={handleTesteGet}> ME CLICK</Button>
    </Container>
  );
};

export default Dashboard;
