import { action } from 'typesafe-actions';
import { ClientesTypes, Clientes } from './types';

interface PayloadForms {
  type: ClientesTypes;
  payload: Clientes | Clientes[];
}

interface ActionType {
  type: ClientesTypes;
}

export const getClientesRequest = (): ActionType =>
  action(ClientesTypes.GETCLIENTESREQUEST);

export const getClientesSuccess = (res: Clientes[]): PayloadForms =>
  action(ClientesTypes.GETCLIENTESSUCCESS, res);

export const getByIdClientesRequest = (request: any): ActionType =>
  action(ClientesTypes.GETBYIDCLIENTESREQUEST, request);

export const getByIdClientesSuccess = (res: Clientes): ActionType =>
  action(ClientesTypes.GETBYIDCLIENTESSUCCESS, res);

export const postClientesRequest = (req: Clientes) =>
  action(ClientesTypes.POSTCLIENTESREQUEST, req);

export const postClientesSuccess = () =>
  action(ClientesTypes.POSTCLIENTESSUCCESS);

export const putClientesRequest = (req: Clientes): PayloadForms =>
  action(ClientesTypes.PUTCLIENTESREQUEST, req);

export const putClientesSuccess = (res: Clientes): PayloadForms =>
  action(ClientesTypes.PUTCLIENTESSUCCESS, res);
