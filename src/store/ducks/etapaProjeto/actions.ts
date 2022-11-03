import { action } from 'typesafe-actions';
import { AgendaDiaEAtrasados, EtapaProjeto, EtapaProjetoTypes } from './types';

interface PayloadForms {
  type: EtapaProjetoTypes;
  payload: EtapaProjeto | EtapaProjeto[] | AgendaDiaEAtrasados[];
}

interface ActionType {
  type: EtapaProjetoTypes;
}

export const getEtapaProjetoRequest = (): ActionType =>
  action(EtapaProjetoTypes.GETETAPAPROJETOREQUEST);

export const getEtapaProjetoSuccess = (res: EtapaProjeto[]): PayloadForms =>
  action(EtapaProjetoTypes.GETETAPAPROJETOSUCCESS, res);

export const getByIdEtapaProjetoRequest = (request: any): ActionType =>
  action(EtapaProjetoTypes.GETBYIDETAPAPROJETOREQUEST, request);

export const getByIdEtapaProjetoSuccess = (res: EtapaProjeto): ActionType =>
  action(EtapaProjetoTypes.GETBYIDETAPAPROJETOSUCCESS, res);

export const putEtapaProjetoRequest = (req: EtapaProjeto): PayloadForms =>
  action(EtapaProjetoTypes.PUTETAPAPROJETOREQUEST, req);

export const putEtapaProjetoSuccess = (res: EtapaProjeto): PayloadForms =>
  action(EtapaProjetoTypes.PUTETAPAPROJETOSUCCESS, res);

export const deleteEtapaProjetoRequest = (req: EtapaProjeto): ActionType =>
  action(EtapaProjetoTypes.DELETEETAPAPROJETOREQUEST, req);

export const deleteEtapaProjetoSuccess = (): ActionType =>
  action(EtapaProjetoTypes.DELETEETAPAPROJETOSUCCESS);

export const getAgendaDiaRequest = (req: any) =>
  action(EtapaProjetoTypes.GETAGENDADIAREQUEST, req);

export const getAgendaDiaSuccess = (res: AgendaDiaEAtrasados[]): PayloadForms =>
  action(EtapaProjetoTypes.GETAGENDADIASUCCESS, res);

export const getAtrasadosEtapaRequest = (req: any) =>
  action(EtapaProjetoTypes.GETETAPASATRASADAREQUEST, req);

export const getAtrasadosEtapaSuccess = (
  res: AgendaDiaEAtrasados[]
): PayloadForms => action(EtapaProjetoTypes.GETETAPASATRASADASUCCESS, res);

export const getEtapaProjetoDiaRequest = (): ActionType =>
  action(EtapaProjetoTypes.GETDIAETAPAPROJETOREQUEST);

export const getEtapaProjetoDiaSuccess = (res: EtapaProjeto[]): PayloadForms =>
  action(EtapaProjetoTypes.GETDIAETAPAPROJETOSUCCESS, res);
