import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { EtapasService } from '../../../Services/etapas/etapas';
import {
  getByIdEtapasSuccess,
  getEtapasSuccess,
  postEtapasSuccess,
} from './actions';
import { Etapas, EtapasTypes } from './types';

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

export function* getEtapas(): Generator<
  CallEffect<Etapas[]> | PutEffect<AnyAction>,
  void,
  EtapasData
> {
  try {
    const response = yield call(EtapasService.getEtapas);

    yield put(getEtapasSuccess(response.data.content));
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
