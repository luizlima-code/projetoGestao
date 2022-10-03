import { EtapaProjeto } from '../../store/ducks/etapaProjeto/types';
import { ItemProjeto } from '../../store/ducks/itemProjeto/types';
import { apiDefault } from '../api';

export const ItemProjetoService = {
  getItemProjeto: (): Promise<ItemProjeto[]> =>
    apiDefault.get(`/planner/itemProjeto`),
  getItemProjetoById: (id: ItemProjeto): Promise<ItemProjeto> =>
    apiDefault.get(`/planner/itemProjeto/${id}`),
  putItemProjeto: (id: string, form: ItemProjeto): Promise<ItemProjeto> =>
    apiDefault.put(`/planner/itemPrijeto/${id}`, form),
  deleteItemProjeto: (id: ItemProjeto): Promise<ItemProjeto> =>
    apiDefault.delete(`/planner/itemProjeto/${id}`),
  // etapaProjeto
  getEtapaProjetoByIdItem: (id: ItemProjeto): Promise<EtapaProjeto> =>
    apiDefault.get(`planner/itemProjeto/${id}/etapaProjeto`),
  postEtapaProjeto: (
    id: ItemProjeto,
    form: EtapaProjeto
  ): Promise<EtapaProjeto> =>
    apiDefault.post(`planner/itemProjeto/${id}/etapaProjeto`, form),
};
