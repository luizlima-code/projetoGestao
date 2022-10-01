import { action } from 'typesafe-actions';
import { FuncionariosTypes, Funcionarios } from './types';

interface PayloadForms {
  type: FuncionariosTypes;
  payload: Funcionarios | Funcionarios[];
}

interface ActionType {
  type: FuncionariosTypes;
}

export const getFuncionariosRequest = (): ActionType =>
  action(FuncionariosTypes.GETFUNCIONARIOSREQUEST);

export const getFuncionariosSuccess = (res: Funcionarios[]): PayloadForms =>
  action(FuncionariosTypes.GETFUNCIONARIOSSUCCESS, res);

export const getByIdFuncionariosRequest = (request: any): ActionType =>
  action(FuncionariosTypes.GETBYIDFUNCIONARIOSREQUEST, request);

export const getByIdFuncionariosSuccess = (res: Funcionarios): ActionType =>
  action(FuncionariosTypes.GETBYIDFUNCIONARIOSSUCCESS, res);

export const postFuncionariosRequest = (req: Funcionarios): ActionType =>
  action(FuncionariosTypes.POSTFUNCIONARIOSREQUEST, req);

export const postFuncionariosSuccess = (): ActionType =>
  action(FuncionariosTypes.POSTFUNCIONARIOSSUCCESS);

export const putFuncionariosRequest = (req: Funcionarios): PayloadForms =>
  action(FuncionariosTypes.PUTFUNCIONARIOSREQUEST, req);

export const putFuncionariosSuccess = (res: Funcionarios): PayloadForms =>
  action(FuncionariosTypes.PUTFUNCIONARIOSSUCCESS, res);

export const deleteFuncionariosRequest = (req: Funcionarios): PayloadForms =>
  action(FuncionariosTypes.DELETEFUNCIONARIOSREQUEST, req);

export const deleteFuncionariosSuccess = (): ActionType =>
  action(FuncionariosTypes.DELETEFUNCIONARIOSSUCCESS);
