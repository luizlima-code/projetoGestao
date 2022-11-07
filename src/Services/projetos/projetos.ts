import { ItemProjeto } from '../../store/ducks/itemProjeto/types';
import {
  Projetos,
  PrazoVsAtrasos,
  ProjetoCustomSearch,
} from '../../store/ducks/projeto/types';
import { apiDefault } from '../api';

export const ProjetosService = {
  getProjetos: (filters: ProjetoCustomSearch): Promise<Projetos[]> =>
    apiDefault.get(`/planner/projeto`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getAllProjetos: (): Promise<Projetos[]> => apiDefault.get(`/planner/projeto`),
  getByIdProjetos: (id: Projetos): Promise<Projetos> =>
    apiDefault.get(`/planner/projeto/${id}`),
  getProjetosAtrasados: (filters: any): Promise<Projetos[]> =>
    apiDefault.get(`/planner/projeto/projetosAtrasados`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  postProjetos: (data: Projetos): Promise<Projetos> =>
    apiDefault.post(`/planner/projeto`, data),
  putProjetos: (id: string, form: Projetos): Promise<Projetos> =>
    apiDefault.put(`/planner/projeto/${id}`, form),
  deleteProjetos: (id: Projetos): Promise<Projetos> =>
    apiDefault.delete(`/planner/projeto/${id}`),
  getGraficoPrazoAtrasos: (filters: any): Promise<PrazoVsAtrasos> =>
    apiDefault.get(`/planner/projeto/prazoVsAtrasados`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getItemProjeto: (id: Projetos): Promise<ItemProjeto[]> =>
    apiDefault.get(`/planner/projeto/${id}/itemProjeto`),
  postItemProjetos: (id: Projetos, data: ItemProjeto): Promise<ItemProjeto> =>
    apiDefault.post(`/planner/projeto/${id}/itemProjeto`, data),
};
