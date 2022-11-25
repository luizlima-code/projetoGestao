import { action } from 'typesafe-actions';
import { ClientesTypes, Clientes, ClienteCustomSearch } from './types';

interface PayloadForms {
  type: ClientesTypes;
  payload: Clientes | Clientes[];
}

interface ActionType {
  type: ClientesTypes;
}

export const getClientesRequest = (req: ClienteCustomSearch): ActionType =>
  action(ClientesTypes.GETCLIENTESREQUEST, req);

export const getClientesSuccess = (res: Clientes[]): PayloadForms =>
  action(ClientesTypes.GETCLIENTESSUCCESS, res);

export const getClientesFilterRequest = (): ActionType =>
  action(ClientesTypes.GETCLIENTESFILTERREQUEST);

export const getClientesFilterSuccess = (res: any): PayloadForms =>
  action(ClientesTypes.GETCLIENTESFILTERSUCCESS, res);

export const getByIdClientesRequest = (req: any): ActionType =>
  action(ClientesTypes.GETBYIDCLIENTESREQUEST, req);

export const getByIdClientesSuccess = (res: Clientes): ActionType =>
  action(ClientesTypes.GETBYIDCLIENTESSUCCESS, res);

export const postClientesRequest = (req: Clientes): ActionType =>
  action(ClientesTypes.POSTCLIENTESREQUEST, req);

export const postClientesSuccess = (): ActionType =>
  action(ClientesTypes.POSTCLIENTESSUCCESS);

export const putClientesRequest = (req: Clientes): PayloadForms =>
  action(ClientesTypes.PUTCLIENTESREQUEST, req);

export const putClientesSuccess = (res: Clientes): PayloadForms =>
  action(ClientesTypes.PUTCLIENTESSUCCESS, res);

export const deleteClienteRequest = (req: any): ActionType =>
  action(ClientesTypes.DELETECLIENTESREQUEST, req);

export const deleteClienteSuccess = (): ActionType =>
  action(ClientesTypes.DELETECLIENTESSUCCESS);
