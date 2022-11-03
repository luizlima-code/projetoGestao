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
import { Grid } from '@mui/material';
import TableDashboard from '../Table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/ducks/rootReducer';
import {
  getGraficoPrazoAtrasadoRequest,
  getProjetosAtrasadosRequest,
} from '../../store/ducks/projeto/actions';
import { getDesempenhoEtapaRequest } from '../../store/ducks/desempenhos/actions';
import {
  getAgendaDiaRequest,
  getAtrasadosEtapaRequest,
} from '../../store/ducks/etapaProjeto/actions';

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
      display: false,
    },
  },
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const { prazoVsAtrasos, projetosAtrasados } = useSelector(
    (state: RootState) => state.projeto
  );
  const { desempenhoEtapa } = useSelector(
    (state: RootState) => state.desempenhos
  );
  const { agendaDia, atrasadosEtapa } = useSelector(
    (state: RootState) => state.etapaProjeto
  );

  const intervalFilter = {
    dataFinal: '22/10/2022',
    dataInicial: '13/01/2022',
  };

  const dataSelectFilter = {
    data: '13/10/2022',
  };

  const dataTESTE = {
    data: '26/11/2022',
  };

  useEffect(() => {
    dispatch(getGraficoPrazoAtrasadoRequest(intervalFilter));
    dispatch(getDesempenhoEtapaRequest(intervalFilter));
    dispatch(getProjetosAtrasadosRequest(dataTESTE));
    dispatch(getAgendaDiaRequest(dataSelectFilter));
    dispatch(getAtrasadosEtapaRequest(dataSelectFilter));
  }, []);

  const dataDonut = {
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

  const labels = desempenhoEtapa.map((desempenho) => desempenho.nomeEtapa);
  const dataBarVertical = {
    labels,
    datasets: [
      {
        data: desempenhoEtapa.map((desempenho) => desempenho.desempenhoMedio),
        backgroundColor: 'rgba(255, 206, 86)',
      },
    ],
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
              headers={['Id', 'Nome', 'Itens']}
              data1={agendaDia}
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
              <Bar options={options} data={dataBarVertical} />
            </DivGrid>
          </Grid>
          <Grid item mt={2}>
            <DivGrid>
              <TableDashboard
                height="30vh"
                headers={['Id', 'Projeto atrasado', 'Data prevista']}
                data2={projetosAtrasados}
              />
            </DivGrid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3.5} xs={12}>
          <DivGrid>
            <Doughnut data={dataDonut} />
          </DivGrid>
        </Grid>
        <Grid item md={8.5} xs={12}>
          <DivGrid>
            <TableDashboard
              height="48vh"
              headers={['Id', 'Nome', 'Itens']}
              data1={atrasadosEtapa}
            />
          </DivGrid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
