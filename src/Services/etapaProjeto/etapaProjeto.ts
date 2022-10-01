import {
  AgendaDiaEAtrasados,
  EtapaProjeto,
} from '../../store/ducks/etapaProjeto/types';
import apiDefault from '../api';

export const EtapaProjetoService = {
  getEtapaProjeto: (): Promise<EtapaProjeto[]> =>
    apiDefault.get(`/planner/etapaProjeto`),
  getByIdEtapaProjeto: (id: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.get(`/planner/etapaProjeto/${id}`),
  putEtapaProjeto: (id: string, form: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.put(`/planner/etapaProjeto/${id}`, form),
  deleteEtapaProjeto: (id: EtapaProjeto): Promise<EtapaProjeto> =>
    apiDefault.delete(`/planner/etapaProjeto/${id}`),
  getAgendaDia: (): Promise<AgendaDiaEAtrasados[]> =>
    apiDefault.get(`/planner/etapaProjeto/agendaDia`),
  getAtrasadosEtapa: (): Promise<AgendaDiaEAtrasados[]> =>
    apiDefault.get(`/planner/etapaProjeto/atrasadosEtapa`),
  getEtapaProjetoDia: (): Promise<EtapaProjeto[]> =>
    apiDefault.get(`/planner/etapaProjeto/etapaProjetoDia`),
};
