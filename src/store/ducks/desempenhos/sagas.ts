import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { DesempenhoService } from '../../../Services/desempenho/desempenho';
import {
  getByIdDesempenhoSuccess,
  getDesempenhoEtapaSuccess,
  getDesempenhoSuccess,
  postDesempenhoSuccess,
  putDesempenhoSuccess,
} from './actions';
import { Desempenho, DesempenhoEtapa, DesempenhoTypes } from './types';

interface DesempenhoType {
  type: DesempenhoTypes;
  data: Desempenho;
}

interface DesempenhoData {
  type: DesempenhoTypes;
  data: Desempenho[] | any;
}

interface DesempenhoEtapaData {
  type: DesempenhoTypes;
  data: DesempenhoEtapa[] | any;
}

interface PayloadDesempenhoSpecific {
  type: string;
  payload: Desempenho;
}

export function* getAllDesempenhos(): Generator<
  CallEffect<Desempenho[]> | PutEffect<AnyAction>,
  void,
  DesempenhoData
> {
  try {
    const response = yield call(DesempenhoService.getAllDesempenhos);

    yield put(getDesempenhoSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar desempenho');
  }
}

export function* getDesempenhoById({
  payload,
}: PayloadDesempenhoSpecific): Generator<
  CallEffect<Desempenho> | PutEffect<AnyAction>,
  void,
  DesempenhoType
> {
  try {
    const response = yield call(DesempenhoService.getByIdDesempenho, payload);

    yield put(getByIdDesempenhoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar desempenho');
  }
}

export function* postDesempenho({
  payload,
}: PayloadDesempenhoSpecific): Generator<
  CallEffect<Desempenho> | PutEffect<AnyAction>,
  void,
  Desempenho
> {
  try {
    yield call(DesempenhoService.postDesempenho, payload);

    yield put(postDesempenhoSuccess());
    toast.success('Desempenho cadastrado com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao cadastrar desempenho');
  }
}

export function* putDesempenho({
  payload,
}: PayloadDesempenhoSpecific): Generator<
  CallEffect<Desempenho> | PutEffect<AnyAction>,
  void,
  DesempenhoData
> {
  try {
    const response = yield call(
      DesempenhoService.putDesempenho,
      payload.id!,
      payload
    );

    yield put(putDesempenhoSuccess(response.data));
    toast.success('Desempenho editado com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao editar desempenho');
  }
}

export function* deleteDesempenho({
  payload,
}: PayloadDesempenhoSpecific): Generator<
  CallEffect<Desempenho> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(DesempenhoService.deleteDesempenho, payload);

    toast.success('Desempenho excluido com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao excluir desempenho');
  }
}

export function* getDesempenhoEtapa({
  payload,
}: any): Generator<
  CallEffect<DesempenhoEtapa[]> | PutEffect<AnyAction>,
  void,
  DesempenhoEtapaData
> {
  try {
    const response = yield call(DesempenhoService.getDesempenhoEtapa, payload);

    yield put(getDesempenhoEtapaSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar desempenho da etapa');
  }
}
