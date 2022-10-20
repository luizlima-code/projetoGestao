import { AnyCnameRecord } from 'dns';
import {
  AgendaDiaEAtrasados,
  EtapaProjeto,
} from '../../store/ducks/etapaProjeto/types';
import { apiDefault } from '../api';

export const EtapaProjetoService = {
  getAllEtapaProjeto: (): Promise<EtapaProjeto[]> =>
    apiDefault.get(`/planner/etapaProjeto`),
  getByIdEtapaProjeto: (id: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.get(`/planner/etapaProjeto/${id}`),
  putEtapaProjeto: (id: string, form: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.put(`/planner/etapaProjeto/${id}`, form),
  deleteEtapaProjeto: (id: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.delete(`/planner/etapaProjeto/${id}`),
  getAgendaDia: (filters: any): Promise<AgendaDiaEAtrasados[]> =>
    apiDefault.get(`/planner/etapaProjeto/agendaDia`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getAtrasadosEtapa: (filters: any): Promise<AgendaDiaEAtrasados[]> =>
    apiDefault.get(`/planner/etapaProjeto/atrasadosEtapa`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getEtapaProjetoDia: (): Promise<EtapaProjeto[]> =>
    apiDefault.get(`/planner/etapaProjeto/etapaProjetoDia`),
};
