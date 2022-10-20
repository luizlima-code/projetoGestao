import {
  Desempenho,
  DesempenhoEtapa,
} from '../../store/ducks/desempenhos/types';
import { apiDefault } from '../api';

type corpoData = {
  dataFinal: string;
  dataInicial: string;
};

export const DesempenhoService = {
  getAllDesempenhos: (): Promise<Desempenho[]> =>
    apiDefault.get(`/planner/desempenho`),
  getByIdDesempenho: (id: Desempenho): Promise<Desempenho> =>
    apiDefault.get(`/planner/desempenho/${id}`),
  postDesempenho: (data: Desempenho): Promise<Desempenho> =>
    apiDefault.post(`/planner/desempenho`, data),
  putDesempenho: (id: string, form: Desempenho): Promise<Desempenho> =>
    apiDefault.put(`/planner/desempenho/${id}`, form),
  deleteDesempenho: (id: Desempenho): Promise<Desempenho> =>
    apiDefault.delete(`/planner/desempenho/${id}`),
  getDesempenhoEtapa: (filters: corpoData): Promise<DesempenhoEtapa[]> =>
    apiDefault.get(`/planner/desempenho/desempenhoEtapa`, {
      params: {
        filters,
      },
      responseType: 'json',
    }),
};
