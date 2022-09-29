import { PageableResponse } from '../../../config/types';
import { Clientes } from "../clientes/types";

export enum ProjetosTypes {
  GETPROJETOSREQUEST = '@projetos/GET_PROJETOS_REQUEST',
  GETPROJETOSSUCCESS = '@projetos/GET_PROJETOS_SUCCESS',
  GETBYIDPROJETOSREQUEST = '@projetos/GET_BY_ID_PROJETOS_REQUEST',
  GETBYIDPROJETOSSUCCESS = '@projetos/GET_BY_ID_PROJETOS_SUCCESS',
  POSTPROJETOSREQUEST = '@projetos/POST_PROJETOS_REQUEST',
  POSTPROJETOSSUCCESS = '@projetos/POST_PROJETOS_SUCCESS',
  PUTPROJETOSREQUEST = '@projetos/PUT_PROJETOS_REQUEST',
  PUTPROJETOSSUCCESS = '@projetos/PUT_PROJETOS_SUCCESS',
  // itemProjeto
  GETITEMPROJETOSREQUEST = '@projetos/GET_ITEM_PROJETOS_REQUEST',
  GETITEMPROJETOSSUCCESS = '@projetos/GET_ITEM_PROJETOS_SUCCESS',
  // projetos atrasados
  GETPROJETOSATRASADOSREQUEST = '@projetos/GET_PROJETOS_ATRASADOS_REQUEST',
  GETPROJETOSATRASADOSSUCCESS = '@projetos/GET_PROJETOS_ATRASADOS_SUCCESS',
}

export interface Projetos {
  cliente: Clientes;
  dataEntrega: string;
  dataPrevisao: string;
  dataInicial: string;
  dataVenda: string;
  descricao: string;
  id?: string;
  nome: string;
}

export interface ItemProjeto {
  codigo: string;
  id?: string;
  nome: string;
  projeto: Projetos;
}

// ta incompleto no swagger
export interface ProjetosAtrasados {
  dataAtual: string;
}

export type ProjetoResponse = PageableResponse<Projetos>;

export interface ProjetosState {
  readonly isLoading: boolean;
  readonly projetos: Projetos[];
  readonly projetosById: Projetos;
  readonly itemProjeto: ItemProjeto[];
  readonly projetosAtrasados: ProjetosAtrasados[];
}
