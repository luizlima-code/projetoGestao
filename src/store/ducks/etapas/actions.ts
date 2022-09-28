import { action } from 'typesafe-actions';
import { EtapasTypes, Etapas } from './types';

interface PayloadForms {
  type: EtapasTypes;
  payload: Etapas | Etapas[];
}

interface ActionType {
  type: EtapasTypes;
}

export const getEtapasRequest = (): ActionType =>
  action(EtapasTypes.GETETAPASREQUEST);

export const getEtapasSuccess = (res: Etapas[]): PayloadForms =>
  action(EtapasTypes.GETETAPASSUCCESS, res);

export const getByIdEtapasRequest = (request: any): ActionType =>
  action(EtapasTypes.GETBYIDETAPASREQUEST, request);

export const getByIdEtapasSuccess = (res: Etapas): ActionType =>
  action(EtapasTypes.GETBYIDETAPASSUCCESS, res);

export const postEtapasRequest = (req: Etapas) =>
  action(EtapasTypes.POSTETAPASREQUEST, req);

export const postEtapasSuccess = () => action(EtapasTypes.POSTETAPASSUCCESS);

export const putEtapasRequest = (req: Etapas): PayloadForms =>
  action(EtapasTypes.PUTETAPASREQUEST, req);

export const putEtapasSuccess = (res: Etapas): PayloadForms =>
  action(EtapasTypes.PUTETAPASSUCCESS, res);
