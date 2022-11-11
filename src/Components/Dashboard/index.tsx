import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

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
import {
  getAgendaDiaRequest,
  getAtrasadosEtapaRequest,
} from '../../store/ducks/etapaProjeto/actions';
import FiltroAgenda from './filtros/tableAgenda';
import FiltroEtapaAtrasada from './filtros/tableEtapaAtrasada';
import FiltroDesempenhoEtapa from './filtros/graficoDesempenho';
import format from 'date-fns/format';
import { getDesempenhoEtapaRequest } from '../../store/ducks/desempenhos/actions';
import FiltroProjetos from './filtros/graficoProjetos';
import FiltroAtrasados from './filtros/tableAtrasados';

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

interface IntervaloData {
  dataFinal: number | Date;
  dataInicial: number | Date;
}

interface SelectData {
  data: number | Date;
}

const Dashboard: React.FC = () => {
  const [filterDesempenho, setFilterDesempenho] = useState<IntervaloData>({
    dataFinal: new Date(),
    dataInicial: new Date(),
  });
  const [filterAtrasados, setFilterAtrasados] = useState<SelectData>({
    data: new Date(),
  });
  const [filterAgenda, setFilterAgenda] = useState<SelectData>({
    data: new Date(),
  });
  const [filterProjetos, setFilterProjetos] = useState<IntervaloData>({
    dataFinal: new Date(),
    dataInicial: new Date(),
  });
  const [filterEtapaAtrasada, setFilterEtapaAtrasada] = useState<SelectData>({
    data: new Date(),
  });

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

  const formatDesempenho = {
    dataFinal: format(filterDesempenho.dataFinal, 'dd/MM/yyyy'),
    dataInicial: format(filterDesempenho.dataInicial, 'dd/MM/yyyy'),
  };

  const formatProjetos = {
    dataFinal: format(filterProjetos.dataFinal, 'dd/MM/yyyy'),
    dataInicial: format(filterProjetos.dataInicial, 'dd/MM/yyyy'),
  };

  const formatAtrasados = {
    data: format(filterAtrasados.data, 'dd/MM/yyyy'),
  };

  const formatAgenda = {
    data: format(filterAgenda.data, 'dd/MM/yyyy'),
  };

  const formatEtapaAtrasada = {
    data: format(filterEtapaAtrasada.data, 'dd/MM/yyyy'),
  };

  useEffect(() => {
    dispatch(getDesempenhoEtapaRequest(formatDesempenho));
  }, [filterDesempenho]);

  useEffect(() => {
    dispatch(getGraficoPrazoAtrasadoRequest(formatProjetos));
  }, [filterProjetos]);

  useEffect(() => {
    dispatch(getProjetosAtrasadosRequest(formatAtrasados));
  }, [filterAtrasados]);

  useEffect(() => {
    dispatch(getAgendaDiaRequest(formatAgenda));
  }, [filterAgenda]);

  useEffect(() => {
    dispatch(getAtrasadosEtapaRequest(formatEtapaAtrasada));
  }, [filterEtapaAtrasada]);

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
          <FiltroAgenda setFilterAgenda={(e) => setFilterAgenda(e)} />
          <DivGrid>
            <TableDashboard
              height="70vh"
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
            <FiltroDesempenhoEtapa
              setFilterDesempenho={(e) => setFilterDesempenho(e)}
            />
            <DivGrid style={{ padding: 8 }}>
              <Bar options={options} data={dataBarVertical} />
            </DivGrid>
          </Grid>
          <Grid item mt={2}>
            <FiltroAtrasados
              setFilterAtrasados={(e) => setFilterAtrasados(e)}
            />
            <DivGrid>
              <TableDashboard
                height="35vh"
                headers={['Id', 'Projeto atrasado', 'Data prevista']}
                data2={projetosAtrasados}
              />
            </DivGrid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3.5} xs={12}>
          <FiltroProjetos setFilterProjetos={(e) => setFilterProjetos(e)} />
          <DivGrid>
            <Doughnut data={dataDonut} />
          </DivGrid>
        </Grid>
        <Grid item md={8.5} xs={12}>
          <FiltroEtapaAtrasada
            setFilterEtapaAtrasada={(e) => setFilterEtapaAtrasada(e)}
          />
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
