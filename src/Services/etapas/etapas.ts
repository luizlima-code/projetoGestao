import { EtapaCustomSearch, Etapas } from '../../store/ducks/etapas/types';
import { apiDefault } from '../api';

export const EtapasService = {
  getEtapas: (filters: EtapaCustomSearch): Promise<Etapas[]> =>
    apiDefault.get(`/planner/etapa`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getByIdEtapas: (id: Etapas): Promise<Etapas> =>
    apiDefault.get(`/planner/etapa/${id}`),
  postEtapas: (data: Etapas): Promise<Etapas> =>
    apiDefault.post(`/planner/etapa`, data),
  putEtapas: (id: string, form: Etapas): Promise<Etapas> =>
    apiDefault.put(`/planner/etapa/${id}`, form),
  deleteEtapas: (id: Etapas): Promise<Etapas> =>
    apiDefault.delete(`/planner/etapa/${id}`),
};
