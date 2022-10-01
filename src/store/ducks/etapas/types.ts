import { PageableResponse } from '../../../config/types';

export enum EtapasTypes {
  GETETAPASREQUEST = '@etapas/GET_ETAPAS_REQUEST',
  GETETAPASSUCCESS = '@etapas/GET_ETAPAS_SUCCESS',
  GETBYIDETAPASREQUEST = '@etapas/GET_BY_ID_ETAPAS_REQUEST',
  GETBYIDETAPASSUCCESS = '@etapas/GET_BY_ID_ETAPAS_SUCCESS',
  POSTETAPASREQUEST = '@etapas/POST_ETAPAS_REQUEST',
  POSTETAPASSUCCESS = '@etapas/POST_ETAPAS_SUCCESS',
  PUTETAPASREQUEST = '@etapas/PUT_ETAPAS_REQUEST',
  PUTETAPASSUCCESS = '@etapas/PUT_ETAPAS_SUCCESS',
  DELETEETAPASREQUEST = '@etapas/DELETE_ETAPAS_REQUEST',
  DELETEETAPASSUCCESS = '@etapas/DELETE_ETAPAS_SUCCESS',
}

export interface Etapas {
  id?: string;
  nome: string;
  descricao: string;
}

export type EtapasResponse = PageableResponse<Etapas>;

export interface EtapasState {
  readonly isLoading: boolean;
  readonly etapas: Etapas[];
  readonly etapasById: Etapas;
  readonly etapasPut: Etapas;
}
