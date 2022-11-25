import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { EtapasService } from '../../../Services/etapas/etapas';
import {
  getByIdEtapasSuccess,
  getEtapasSuccess,
  postEtapasSuccess,
  putEtapasSuccess,
} from './actions';
import { EtapaCustomSearch, Etapas, EtapasTypes } from './types';

interface EtapasType {
  type: EtapasTypes;
  data: Etapas;
}

interface EtapasData {
  type: EtapasTypes;
  data: Etapas[] | any;
}

interface PayloadEtapasSpecific {
  type: string;
  payload: Etapas;
}

interface FilterEtapa {
  type: EtapasTypes;
  payload: EtapaCustomSearch;
}

export function* getEtapas({
  payload,
}: FilterEtapa): Generator<
  CallEffect<Etapas[]> | PutEffect<AnyAction>,
  void,
  EtapasData
> {
  try {
    const response = yield call(EtapasService.getEtapas, payload);

    yield put(getEtapasSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao buscar etapas');
  }
}

export function* getEtapasById({
  payload,
}: PayloadEtapasSpecific): Generator<
  CallEffect<Etapas> | PutEffect<AnyAction>,
  void,
  EtapasType
> {
  try {
    const response = yield call(EtapasService.getByIdEtapas, payload);

    yield put(getByIdEtapasSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao buscar etapa');
  }
}

export function* postEtapas({
  payload,
}: PayloadEtapasSpecific): Generator<
  CallEffect<Etapas> | PutEffect<AnyAction>,
  void,
  Etapas
> {
  try {
    yield call(EtapasService.postEtapas, payload);

    yield put(postEtapasSuccess());
    toast.success('Etapa cadastrada com sucesso!');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao cadastrar etapa');
  }
}

export function* putEtapas({
  payload,
}: PayloadEtapasSpecific): Generator<
  CallEffect<Etapas> | PutEffect<AnyAction>,
  void,
  EtapasData
> {
  try {
    const response = yield call(EtapasService.putEtapas, payload.id!, payload);

    yield put(putEtapasSuccess(response.data));
    toast.success('Etapa editado com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao editar etapa');
  }
}

export function* deleteEtapas({
  payload,
}: PayloadEtapasSpecific): Generator<
  CallEffect<Etapas> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(EtapasService.deleteEtapas, payload);

    toast.success('Etapa excluido com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao excluir etapa');
  }
}
