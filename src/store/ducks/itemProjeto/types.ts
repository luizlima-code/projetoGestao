import { PageableResponse } from '../../../config/types';
import { EtapaProjeto } from '../etapaProjeto/types';
import { Projetos } from '../projeto/types';

export enum ItemProjetoTypes {
  GETITEMPROJETOREQUEST = '@itemProjeto/GET_ITEM_PROJETO_REQUEST',
  GETITEMPROJETOSUCCESS = '@itemProjeto/GET_ITEM_PROJETO_SUCCESS',
  GETBYIDITEMPROJETOREQUEST = '@itemProjeto/GET_BY_ID_ITEM_PROJETO_REQUEST',
  GETBYIDITEMPROJETOSUCCESS = '@itemProjeto/GET_BY_ID_ITEM_PROJETO_SUCCESS',
  PUTITEMPROJETOREQUEST = '@itemProjeto/PUT_ITEM_PROJETO_REQUEST',
  PUTITEMPROJETOSUCCESS = '@itemProjeto/PUT_ITEM_PROJETOS_SUCCESS',
  DELETEITEMPROJETOREQUEST = '@itemProjeto/DELETE_ITEM_PROJETO_REQUEST',
  DELETEITEMPROJETOSUCCESS = '@itemProjeto/DELETE_ITEM_PROJETOS_SUCCESS',
  // etapaProjeto
  GETETAPAPROJETOBYIDITEMREQUEST = '@itemProjeto/GET_ETAPA_PROJETO_BY_ID_ITEM_REQUEST',
  GETETAPAPROJETOBYIDITEMSUCCESS = '@itemProjeto/GET_ETAPA_PROJETO_BY_ID_ITEM_SUCCESS',
  POSTETAPAPROJETOREQUEST = '@itemProjeto/POST_ETAPA_PROJETO_REQUEST',
  POSTETAPAPROJETOSUCCESS = '@itemProjeto/POST_ETAPA_PROJETO_SUCCESS',
}

export interface ItemProjeto {
  codigo: string;
  id?: string;
  nome: string;
  projeto: Projetos;
}

export type ProjetoResponse = PageableResponse<ItemProjeto>;

export interface ItemProjetoState {
  readonly isLoading: boolean;
  readonly itemProjetos: ItemProjeto[];
  readonly itemProjetoById: ItemProjeto;
  readonly putItemProjeto: ItemProjeto;
  readonly etapaProjetoByIdItem: EtapaProjeto[];
}
