import { PageableResponse } from "../../../config/types";

export enum FuncionariosTypes {
  GETFUNCIONARIOSREQUEST = '@funcionarios/GET_FUNCIONARIOS_REQUEST',
  GETFUNCIONARIOSSUCCESS = '@funcionarios/GET_FUNCIONARIOS_SUCCESS',
  GETBYIDFUNCIONARIOSREQUEST = '@funcionarios/GET_BY_ID_FUNCIONARIOS_REQUEST',
  GETBYIDFUNCIONARIOSSUCCESS = '@funcionarios/GET_BY_ID_FUNCIONARIOS_SUCCESS',
  POSTFUNCIONARIOSREQUEST = '@funcionarios/POST_FUNCIONARIOS_REQUEST',
  POSTFUNCIONARIOSSUCCESS = '@funcionarios/POST_FUNCIONARIOS_SUCCESS',
  PUTFUNCIONARIOSREQUEST = '@funcionarios/PUT_FUNCIONARIOS_REQUEST',
  PUTFUNCIONARIOSSUCCESS = '@funcionarios/PUT_FUNCIONARIOS_SUCCESS',
}

export interface Funcionarios {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  senha?: string;
}

export type FuncionariosResponse = PageableResponse<Funcionarios>;

export interface FuncionariosState {
  readonly isLoading: boolean;
  readonly funcionarios: Funcionarios[];
  readonly funcionarioById: Funcionarios;
}