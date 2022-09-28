import {
  Projetos,
  ProjetosAtrasados,
  ItemProjeto,
} from '../../store/ducks/projeto/types';
import apiDefault from '../api';

export const ProjetosService = {
  getProjetos: (): Promise<Projetos[]> => apiDefault.get(`/planner/projeto`),
  getByIdProjetos: (id: Projetos): Promise<Projetos> =>
    apiDefault.get(`/planner/projeto/${id}`),
  getItemProjeto: (id: ItemProjeto): Promise<ItemProjeto[]> =>
    apiDefault.get(`/planner/projeto/${id}/itemProjeto`),
  getProjetosAtrasados: (): Promise<ProjetosAtrasados[]> =>
    apiDefault.get(`/planner/projeto/projetosAtrasados`),
  postProjetos: (data: Projetos): Promise<Projetos> =>
    apiDefault.post(`/planner/projeto`, data),
  putProjetos: (id: string, form: Projetos): Promise<Projetos> =>
    apiDefault.put(`/planner/projeto/${id}`, form),
};
