import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ItemProjetoService } from '../../../Services/itemProjeto/itemProjeto';
import { EtapaProjeto } from '../etapaProjeto/types';
import {
  getByIdItemEtapaProjetoSuccess,
  getByIdItemProjetoSuccess,
  getAllItemProjetoSuccess,
  postEtapaProjetoSuccess,
  putItemProjetoSuccess,
} from './actions';
import { ItemProjeto, ItemProjetoTypes } from './types';

interface ItemProjetoType {
  type: ItemProjetoTypes;
  data: ItemProjeto;
}
interface EtapaProjetoType {
  type: ItemProjetoTypes;
  data: EtapaProjeto;
}

interface ItemProjetoData {
  type: ItemProjetoTypes;
  data: ItemProjeto[] | any;
}

interface PayloadItemProjetoSpecific {
  type: string;
  payload: ItemProjeto;
}

interface PayloadEtapaProjetoSpecific {
  type: string;
  payload: EtapaProjeto;
}

export function* getAllItemProjetos(): Generator<
  CallEffect<ItemProjeto[]> | PutEffect<AnyAction>,
  void,
  ItemProjetoData
> {
  try {
    const response = yield call(ItemProjetoService.getAllItemProjeto);

    console.log('sagas:', response.data);
    yield put(getAllItemProjetoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar item projeto');
  }
}

export function* getItemProjetoById({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto> | PutEffect<AnyAction>,
  void,
  ItemProjetoType
> {
  try {
    const response = yield call(ItemProjetoService.getItemProjetoById, payload);

    yield put(getByIdItemProjetoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar item projeto');
  }
}

export function* putItemProjeto({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto> | PutEffect<AnyAction>,
  void,
  ItemProjetoData
> {
  try {
    const response = yield call(
      ItemProjetoService.putItemProjeto,
      payload.id!,
      payload
    );

    yield put(putItemProjetoSuccess(response.data));
    toast.success('Item do projeto editado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao editar item do projeto');
  }
}

export function* deleteItemProjeto({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(ItemProjetoService.deleteItemProjeto, payload);

    toast.success('Item do projeto excluido com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao excluir item do projeto');
  }
}

export function* postEtapa({
  payload,
}: PayloadEtapaProjetoSpecific): Generator<
  CallEffect<EtapaProjeto> | PutEffect<AnyAction>,
  void,
  EtapaProjeto
> {
  try {
    yield call(
      ItemProjetoService.postEtapaProjeto,
      payload.itemProjeto,
      payload
    );

    yield put(postEtapaProjetoSuccess());
    toast.success('Etapa do projeto cadastrado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao cadastrar etapa do projeto');
  }
}

export function* getEtapaProjetoByIdItem({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto> | PutEffect<AnyAction>,
  void,
  EtapaProjetoType
> {
  try {
    const response = yield call(ItemProjetoService.getItemProjetoById, payload);

    yield put(getByIdItemEtapaProjetoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar etapa do projeto');
  }
}
