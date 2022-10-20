import { ItemProjeto } from '../../store/ducks/itemProjeto/types';
import { Projetos, PrazoVsAtrasos } from '../../store/ducks/projeto/types';
import { apiDefault } from '../api';

type corpoData = {
  dataFinal: string;
  dataInicial: string;
};

export const ProjetosService = {
  getProjetos: (): Promise<Projetos[]> => apiDefault.get(`/planner/projeto`),
  getByIdProjetos: (id: Projetos): Promise<Projetos> =>
    apiDefault.get(`/planner/projeto/${id}`),
  getProjetosAtrasados: (): Promise<Projetos[]> =>
    apiDefault.get(`/planner/projeto/projetosAtrasados`),
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
