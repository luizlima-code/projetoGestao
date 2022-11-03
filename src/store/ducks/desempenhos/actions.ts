import { action } from 'typesafe-actions';
import { Desempenho, DesempenhoEtapa, DesempenhoTypes } from './types';

interface PayloadForms {
  type: DesempenhoTypes;
  payload: Desempenho | Desempenho[] | DesempenhoEtapa[];
}

interface ActionType {
  type: DesempenhoTypes;
}

export const getDesempenhoRequest = (): ActionType =>
  action(DesempenhoTypes.GETDESEMPENHOREQUEST);

export const getDesempenhoSuccess = (res: Desempenho[]): PayloadForms =>
  action(DesempenhoTypes.GETDESEMPENHOSUCCESS, res);

export const getByIdDesempenhoRequest = (request: any): ActionType =>
  action(DesempenhoTypes.GETBYIDDESEMPENHOREQUEST, request);

export const getByIdDesempenhoSuccess = (res: Desempenho): ActionType =>
  action(DesempenhoTypes.GETBYIDDESEMPENHOSUCCESS, res);

export const postDesempenhoRequest = (req: Desempenho): ActionType =>
  action(DesempenhoTypes.POSTDESEMPENHOREQUEST, req);

export const postDesempenhoSuccess = (): ActionType =>
  action(DesempenhoTypes.POSTDESEMPENHOSUCCESS);

export const putDesempenhoRequest = (req: Desempenho): PayloadForms =>
  action(DesempenhoTypes.PUTDESEMPENHOREQUEST, req);

export const putDesempenhoSuccess = (res: Desempenho): PayloadForms =>
  action(DesempenhoTypes.PUTDESEMPENHOSUCCESS, res);

export const deleteDesempenhoRequest = (req: Desempenho): PayloadForms =>
  action(DesempenhoTypes.DELETEDESEMPENHOREQUEST, req);

export const deleteDesempenhoSuccess = (): ActionType =>
  action(DesempenhoTypes.DELETEDESEMPENHOSUCCESS);

export const getDesempenhoEtapaRequest = (filters: any) =>
  action(DesempenhoTypes.GETDESEMPENHOETAPAREQUEST, filters);

export const getDesempenhoEtapaSuccess = (
  res: DesempenhoEtapa[]
): PayloadForms => action(DesempenhoTypes.GETDESEMPENHOETAPASUCCESS, res);
