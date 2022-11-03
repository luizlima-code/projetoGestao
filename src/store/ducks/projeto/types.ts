import { PageableResponse } from '../../../config/types';
import { Clientes } from '../clientes/types';
import { ItemProjeto } from '../itemProjeto/types';

export enum ProjetosTypes {
  GETPROJETOSREQUEST = '@projetos/GET_PROJETOS_REQUEST',
  GETPROJETOSSUCCESS = '@projetos/GET_PROJETOS_SUCCESS',
  GETBYIDPROJETOSREQUEST = '@projetos/GET_BY_ID_PROJETOS_REQUEST',
  GETBYIDPROJETOSSUCCESS = '@projetos/GET_BY_ID_PROJETOS_SUCCESS',
  POSTPROJETOSREQUEST = '@projetos/POST_PROJETOS_REQUEST',
  POSTPROJETOSSUCCESS = '@projetos/POST_PROJETOS_SUCCESS',
  PUTPROJETOSREQUEST = '@projetos/PUT_PROJETOS_REQUEST',
  PUTPROJETOSSUCCESS = '@projetos/PUT_PROJETOS_SUCCESS',
  DELETEPROJETOSREQUEST = '@projetos/DELETE_PROJETOS_REQUEST',
  DELETEPROJETOSSUCCESS = '@projetos/DELETE_PROJETOS_SUCCESS',
  // itemProjeto
  GETITEMPROJETOSREQUEST = '@projetos/GET_ITEM_PROJETOS_REQUEST',
  GETITEMPROJETOSSUCCESS = '@projetos/GET_ITEM_PROJETOS_SUCCESS',
  POSTITEMPROJETOREQUEST = '@projetos/POST_ITEM_PROJETO_REQUEST',
  POSTITEMPROJETOSUCCESS = '@projetos/POST_ITEM_PROJETO_SUCCESS',
  // projetos atrasados
  GETPROJETOSATRASADOSREQUEST = '@projetos/GET_PROJETOS_ATRASADOS_REQUEST',
  GETPROJETOSATRASADOSSUCCESS = '@projetos/GET_PROJETOS_ATRASADOS_SUCCESS',
  // prazoVsAtrasos
  GETPRAZOVSATRASADOSREQUEST = '@projetos/GET_PRAZO_VS_ATRASADOS_REQUEST',
  GETPRAZOVSATRASADOSSUCCESS = '@projetos/GET_PRAZO_VS_ATRASADOS_SUCCESS',
}

export interface Projetos {
  cliente: Clientes | any;
  dataEntrega: string;
  dataPrevisao: string;
  dataInicial?: string;
  dataVenda: string;
  descricao: string;
  id?: string;
  nome: string;
}

export interface ProjetoCustomSearch {
  nome?: string;
  nomeCliente?: string;
  pageNumber: number;
  pageSize: number;
}

export interface PrazoVsAtrasos {
  foraDoPrazo: number;
  noPrazo: number;
}

export type ProjetoResponse = PageableResponse<Projetos>;

export interface ProjetosState {
  readonly isLoading: boolean;
  readonly projetos: ProjetoResponse;
  readonly projetosById: Projetos;
  readonly projetosPut: Projetos;
  readonly itemProjeto: ItemProjeto[];
  readonly projetosAtrasados: Projetos[];
  readonly prazoVsAtrasos: PrazoVsAtrasos;
}
