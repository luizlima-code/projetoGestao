import { PageableResponse } from '../../../config/types';
import { Funcionarios } from '../funcionarios/types';

export enum DesempenhoTypes {
  GETDESEMPENHOREQUEST = '@desempenho/GET_DESEMPENHO_REQUEST',
  GETDESEMPENHOSUCCESS = '@desempenho/GET_DESEMPENHO_SUCCESS',
  GETBYIDDESEMPENHOREQUEST = '@desempenho/GET_BY_ID_DESEMPENHO_REQUEST',
  GETBYIDDESEMPENHOSUCCESS = '@desempenho/GET_BY_ID_DESEMPENHO_SUCCESS',
  POSTDESEMPENHOREQUEST = '@desempenho/POST_DESEMPENHO_REQUEST',
  POSTDESEMPENHOSUCCESS = '@desempenho/POST_DESEMPENHO_SUCCESS',
  PUTDESEMPENHOREQUEST = '@desempenho/PUT_DESEMPENHO_REQUEST',
  PUTDESEMPENHOSUCCESS = '@desempenho/PUT_DESEMPENHO_SUCCESS',
  DELETEDESEMPENHOREQUEST = '@desempenho/DELETE_DESEMPENHO_REQUEST',
  DELETEDESEMPENHOSUCCESS = '@desempenho/DELETE_DESEMPENHO_SUCCESS',
  GETDESEMPENHOETAPAREQUEST = '@desempenho/GET_DESEMPENHO_ETAPA_REQUEST',
  GETDESEMPENHOETAPASUCCESS = '@desempenho/GET_DESEMPENHO_ETAPA_SUCCESS',
}

export interface Desempenho {
  data: string;
  funcionario: Funcionarios;
  id?: string;
  observacao: string;
  percentualConcluido: number;
}

export interface DesempenhoEtapa {
  desempenhoMedio: number;
  idEtapa: number;
  nomeEtapa: string;
  quantidade: number;
}

export type DesempenhoResponse = PageableResponse<Desempenho>;

export interface DesempenhoState {
  readonly isLoading: boolean;
  readonly desempenhos: Desempenho[];
  readonly desempenhoById: Desempenho;
  readonly desempenhoPut: Desempenho;
  readonly desempenhoEtapa: DesempenhoEtapa[];
}
