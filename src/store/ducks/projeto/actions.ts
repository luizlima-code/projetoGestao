import { action } from 'typesafe-actions';
import { ItemProjeto } from '../itemProjeto/types';
import { PrazoVsAtrasos, Projetos, ProjetosTypes } from './types';

interface PayloadForms {
  type: ProjetosTypes;
  payload: Projetos | Projetos[] | ItemProjeto[] | PrazoVsAtrasos;
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

export const getProjetosAtrasadosSuccess = (res: Projetos[]): PayloadForms =>
  action(ProjetosTypes.GETPROJETOSATRASADOSSUCCESS, res);

export const postProjetosRequest = (req: Projetos): ActionType =>
  action(ProjetosTypes.POSTPROJETOSREQUEST, req);

export const postProjetosSuccess = (): ActionType =>
  action(ProjetosTypes.POSTPROJETOSSUCCESS);

export const putProjetosRequest = (req: Projetos): PayloadForms =>
  action(ProjetosTypes.PUTPROJETOSREQUEST, req);

export const putProjetosSuccess = (res: Projetos): PayloadForms =>
  action(ProjetosTypes.PUTPROJETOSSUCCESS, res);

export const getGraficoPrazoAtrasadoRequest = (filters: any) =>
  action(ProjetosTypes.GETPRAZOVSATRASADOSREQUEST, filters);

export const getGraficoPrazoAtrasadoSuccess = (
  res: PrazoVsAtrasos
): PayloadForms => action(ProjetosTypes.GETPRAZOVSATRASADOSSUCCESS, res);

export const deleteProjetosRequest = (req: Projetos): PayloadForms =>
  action(ProjetosTypes.DELETEPROJETOSREQUEST, req);

export const deleteProjetosSuccess = (): ActionType =>
  action(ProjetosTypes.DELETEPROJETOSSUCCESS);

export const getItemProjetosRequest = (request: any): ActionType =>
  action(ProjetosTypes.GETITEMPROJETOSREQUEST, request);

export const getItemProjetosSuccess = (res: ItemProjeto[]): ActionType =>
  action(ProjetosTypes.GETITEMPROJETOSSUCCESS, res);

export const postItemProjetoRequest = (req: ItemProjeto): ActionType =>
  action(ProjetosTypes.POSTITEMPROJETOREQUEST, req);

export const postItemProjetoSuccess = (): ActionType =>
  action(ProjetosTypes.POSTITEMPROJETOSUCCESS);
