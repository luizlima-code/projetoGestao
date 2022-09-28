import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { EtapasService } from '../../../Services/etapas/etapas';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
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
    yield put(showAlert('Erro ao pesquisar etapas', AlertTypes.ERROR));
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
    yield put(showAlert('Erro ao pesquisar etapa', AlertTypes.ERROR));
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
    const response = yield call(EtapasService.postEtapas, payload);

    yield put(postEtapasSuccess());
    console.log(response);
    yield put(showAlert('Etapa cadastrado com sucesso', AlertTypes.SUCCESS));
  } catch (error) {
    console.error(error);
    console.log('error: ', payload);
    yield put(showAlert('Erro ao cadastrar etapa', AlertTypes.ERROR));
  }
}
