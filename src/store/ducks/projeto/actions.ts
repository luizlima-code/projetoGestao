import { action } from 'typesafe-actions';
import {
  ItemProjeto,
  Projetos,
  ProjetosAtrasados,
  ProjetosTypes,
} from './types';

interface PayloadForms {
  type: ProjetosTypes;
  payload: Projetos | Projetos[] | ItemProjeto[] | ProjetosAtrasados[];
}

interface ActionType {
  type: ProjetosTypes;
}

export const getProjetosRequest = (): ActionType =>
  action(ProjetosTypes.GETPROJETOSREQUEST);

export const getProjetosSuccess = (res: Projetos[]): PayloadForms =>
  action(ProjetosTypes.GETPROJETOSSUCCESS, res);

export const getByIdProjetosRequest = (request: any): ActionType =>
  action(ProjetosTypes.GETBYIDPROJETOSREQUEST, request);

export const getByIdProjetosSuccess = (res: Projetos): ActionType =>
  action(ProjetosTypes.GETBYIDPROJETOSSUCCESS, res);

export const getProjetosAtrasadosRequest = (): ActionType =>
  action(ProjetosTypes.GETPROJETOSATRASADOSREQUEST);

export const getProjetosAtrasadosSuccess = (
  res: ProjetosAtrasados[]
): PayloadForms => action(ProjetosTypes.GETPROJETOSATRASADOSSUCCESS, res);

export const getByIdItemProjetosRequest = (request: any): ActionType =>
  action(ProjetosTypes.GETITEMPROJETOSREQUEST, request);

export const getByIdItemProjetosSuccess = (res: ItemProjeto[]): ActionType =>
  action(ProjetosTypes.GETITEMPROJETOSSUCCESS, res);

export const postProjetosRequest = (req: Projetos) =>
  action(ProjetosTypes.POSTPROJETOSREQUEST, req);

export const postProjetosSuccess = () =>
  action(ProjetosTypes.POSTPROJETOSSUCCESS);

export const putProjetosRequest = (req: Projetos): PayloadForms =>
  action(ProjetosTypes.PUTPROJETOSREQUEST, req);

export const putProjetosSuccess = (res: Projetos): PayloadForms =>
  action(ProjetosTypes.PUTPROJETOSSUCCESS, res);
