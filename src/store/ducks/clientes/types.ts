import { PageableResponse } from '../../../config/types';

export enum ClientesTypes {
  GETCLIENTESREQUEST = '@clientes/GET_CLIENTES_REQUEST',
  GETCLIENTESSUCCESS = '@clientes/GET_CLIENTES_SUCCESS',
  GETBYIDCLIENTESREQUEST = '@clientes/GET_BY_ID_CLIENTES_REQUEST',
  GETBYIDCLIENTESSUCCESS = '@clientes/GET_BY_ID_CLIENTES_SUCCESS',
  POSTCLIENTESREQUEST = '@clientes/POST_CLIENTES_REQUEST',
  POSTCLIENTESSUCCESS = '@clientes/POST_CLIENTES_SUCCESS',
  PUTCLIENTESREQUEST = '@clientes/PUT_CLIENTES_REQUEST',
  PUTCLIENTESSUCCESS = '@clientes/PUT_CLIENTES_SUCCESS',
  DELETECLIENTESREQUEST = '@clientes/DELETE_CLIENTES_REQUEST',
  DELETECLIENTESSUCCESS = '@clientes/DELETE_CLIENTES_SUCCESS',
}

export interface Clientes {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

export type ClientesResponse = PageableResponse<Clientes>;

export interface ClientesState {
  readonly isLoading: boolean;
  readonly clientes: Clientes[];
  readonly clientesById: Clientes;
  readonly clientesPut: Clientes;
}
