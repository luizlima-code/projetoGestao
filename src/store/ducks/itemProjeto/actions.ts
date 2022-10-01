import { action } from 'typesafe-actions';
import { EtapaProjeto } from '../etapaProjeto/types';
import { ItemProjeto, ItemProjetoTypes } from './types';

interface PayloadForms {
  type: ItemProjetoTypes;
  payload: ItemProjeto | ItemProjeto[];
}

interface ActionType {
  type: ItemProjetoTypes;
}

export const getItemProjetoRequest = (): ActionType =>
  action(ItemProjetoTypes.GETITEMPROJETOREQUEST);

export const getItemProjetoSuccess = (res: ItemProjeto[]): PayloadForms =>
  action(ItemProjetoTypes.GETBYIDITEMPROJETOSUCCESS, res);

export const getByIdItemProjetoRequest = (req: any): ActionType =>
  action(ItemProjetoTypes.GETBYIDITEMPROJETOREQUEST, req);

export const getByIdItemProjetoSuccess = (res: ItemProjeto): ActionType =>
  action(ItemProjetoTypes.GETBYIDITEMPROJETOSUCCESS, res);

export const putItemProjetoRequest = (req: ItemProjeto): PayloadForms =>
  action(ItemProjetoTypes.PUTITEMPROJETOREQUEST, req);

export const putItemProjetoSuccess = (res: ItemProjeto): PayloadForms =>
  action(ItemProjetoTypes.PUTITEMPROJETOSUCCESS, res);

export const deleteItemProjetoRequest = (req: ItemProjeto): PayloadForms =>
  action(ItemProjetoTypes.DELETEITEMPROJETOREQUEST, req);

export const deleteItemProjetoSuccess = (): ActionType =>
  action(ItemProjetoTypes.DELETEITEMPROJETOSUCCESS);

export const getByIdItemEtapaProjetoRequest = (req: ItemProjeto): ActionType =>
  action(ItemProjetoTypes.GETBYIDITEMPROJETOREQUEST, req);

export const getByIdItemEtapaProjetoSuccess = (res: EtapaProjeto): ActionType =>
  action(ItemProjetoTypes.GETBYIDITEMPROJETOSUCCESS, res);

export const postEtapaProjetoRequest = (req: EtapaProjeto): ActionType =>
  action(ItemProjetoTypes.POSTETAPAPROJETOREQUEST, req);

export const postEtapaProjetoSuccess = (): ActionType =>
  action(ItemProjetoTypes.POSTETAPAPROJETOSUCCESS);
