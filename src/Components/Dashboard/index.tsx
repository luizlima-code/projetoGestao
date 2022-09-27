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
import { getFuncionariosRequest, getByIdFuncionariosRequest } from '../../store/ducks/funcionarios/actions';
import { RootState } from '../../store/ducks/rootReducer';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Rosa',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 206, 86)',
    },
    {
      label: 'Azul 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#0077b6',
    },
  ],
};

export const data2 = {
  labels: ['Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [28, 19],
      backgroundColor: ['#0077b6', 'rgba(255, 206, 86)'],
      borderWidth: 6,
    },
  ],
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const { funcionarios, funcionarioById, isLoading } = useSelector(
    (state: RootState) => state.funcionarios
  );

  useEffect(() => {
    dispatch(getFuncionariosRequest());
    // console.log('ola');
  }, [getFuncionariosRequest]);

  useEffect(() => {
    dispatch(getByIdFuncionariosRequest('14'));
    // console.log('ola by id');
  }, [getByIdFuncionariosRequest]);

  const handleTesteGet = async () => {
    console.log('funcionarios: ', funcionarios);
    console.log('funcionarios by id: ', funcionarioById);
    console.log('isloading: ', isLoading);
  }

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
              height={430}
              titulo="Grafico 01"
              headers={['header1', 'header2', 'header3']}
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
                height={200}
                titulo="Grafico 02"
                headers={['header4', 'header5', 'header6']}
              />
            </DivGrid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <DivGrid>
            <Doughnut data={data2} />
          </DivGrid>
        </Grid>
        <Grid item md={8} xs={12}>
          <DivGrid>
            <TableDashboard
              height={32}
              titulo="Grafico 03"
              headers={['header7', 'header8', 'header9']}
            />
          </DivGrid>
        </Grid>
      </Grid>
      <Button onClick={handleTesteGet}> ME CLICK</Button>
    </Container>
  );
};

export default Dashboard;
