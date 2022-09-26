export enum FuncionariosTypes {
  GETFUNCIONARIOSREQUEST = '@forms/funcionarios/GET_FUNCIONARIOS_REQUEST',
  GETFUNCIONARIOSSUCCESS = '@forms/funcionarios/GET_FUNCIONARIOS_SUCCESS',
  GETBYIDFUNCIONARIOSREQUEST = '@forms/funcionarios/GET_BY_ID_FUNCIONARIOS_REQUEST',
  GETBYIDFUNCIONARIOSSUCCESS = '@forms/funcionarios/GET_BY_ID_FUNCIONARIOS_SUCCESS',
  POSTFUNCIONARIOSREQUEST = '@forms/funcionarios/POST_FUNCIONARIOS_REQUEST',
  POSTFUNCIONARIOSSUCCESS = '@forms/funcionarios/POST_FUNCIONARIOS_SUCCESS',
  PUTFUNCIONARIOSREQUEST = '@forms/funcionarios/PUT_FUNCIONARIOS_REQUEST',
  PUTFUNCIONARIOSSUCCESS = '@forms/funcionarios/PUT_FUNCIONARIOS_SUCCESS',
}

export interface Funcionarios {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  senha?: string;
}

export interface FuncionariosState {
  readonly isLoading: boolean;
  readonly funcionarios: Funcionarios[];
  readonly funcionarioById: Funcionarios;
}