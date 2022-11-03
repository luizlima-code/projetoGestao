import { action } from 'typesafe-actions';
import { EtapasTypes, Etapas, EtapaCustomSearch } from './types';

interface PayloadForms {
  type: EtapasTypes;
  payload: Etapas | Etapas[];
}

interface ActionType {
  type: EtapasTypes;
}

export const getEtapasRequest = (req: EtapaCustomSearch): ActionType =>
  action(EtapasTypes.GETETAPASREQUEST, req);

export const getEtapasSuccess = (res: Etapas[]): PayloadForms =>
  action(EtapasTypes.GETETAPASSUCCESS, res);

export const getByIdEtapasRequest = (request: any): ActionType =>
  action(EtapasTypes.GETBYIDETAPASREQUEST, request);

export const getByIdEtapasSuccess = (res: Etapas): ActionType =>
  action(EtapasTypes.GETBYIDETAPASSUCCESS, res);

export const postEtapasRequest = (req: Etapas): ActionType =>
  action(EtapasTypes.POSTETAPASREQUEST, req);

export const postEtapasSuccess = (): ActionType =>
  action(EtapasTypes.POSTETAPASSUCCESS);

export const putEtapasRequest = (req: Etapas): PayloadForms =>
  action(EtapasTypes.PUTETAPASREQUEST, req);

export const putEtapasSuccess = (res: Etapas): PayloadForms =>
  action(EtapasTypes.PUTETAPASSUCCESS, res);

export const deleteProjetosRequest = (req: Etapas): PayloadForms =>
  action(EtapasTypes.DELETEETAPASREQUEST, req);

export const deleteProjetosSuccess = (): ActionType =>
  action(EtapasTypes.DELETEETAPASSUCCESS);
