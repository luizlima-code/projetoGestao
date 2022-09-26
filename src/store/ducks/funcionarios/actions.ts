import { action } from "typesafe-actions";
import { FuncionariosTypes, Funcionarios } from "./types";

interface PayloadForms {
  type: FuncionariosTypes;
  payload: Funcionarios | Funcionarios[];
}

interface ActionType {
  type: FuncionariosTypes;
}

export const getFuncionariosRequest = (): ActionType =>
  action(FuncionariosTypes.GETFUNCIONARIOSREQUEST)

export const getFuncionariosSuccess = (res: Funcionarios[]): PayloadForms =>
  action(FuncionariosTypes.GETFUNCIONARIOSSUCCESS, res)

export const getByIdFuncionariosRequest = (id: string): ActionType =>
  action(FuncionariosTypes.GETBYIDFUNCIONARIOSREQUEST, id)

export const getByIdFuncionariosSuccess = (res: Funcionarios): ActionType =>
  action(FuncionariosTypes.GETBYIDFUNCIONARIOSSUCCESS, res)

export const postFuncionariosRequest = (req: any): ActionType =>
  action(FuncionariosTypes.POSTFUNCIONARIOSREQUEST, req)

export const postFuncionariosSuccess = (res: Funcionarios): ActionType =>
  action(FuncionariosTypes.POSTFUNCIONARIOSSUCCESS, res)

export const putFuncionariosRequest = (req: Funcionarios): PayloadForms =>
  action(FuncionariosTypes.PUTFUNCIONARIOSREQUEST, req)

export const putFuncionariosSuccess = (res: Funcionarios): PayloadForms =>
  action(FuncionariosTypes.PUTFUNCIONARIOSSUCCESS, res)