import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ClientesService } from '../../../Services/clientes/clientes';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
import {
  getByIdClientesSuccess,
  getClientesSuccess,
  postClientesSuccess,
} from './actions';
import { Clientes, ClientesTypes } from './types';

interface ClientesType {
  type: ClientesTypes;
  data: Clientes;
}

interface ClientesData {
  type: ClientesTypes;
  data: Clientes[] | any;
}

interface PayloadClientesSpecific {
  type: string;
  payload: Clientes;
}

export function* getClientes(): Generator<
  CallEffect<Clientes[]> | PutEffect<AnyAction>,
  void,
  ClientesData
> {
  try {
    const response = yield call(ClientesService.getClientes);

    yield put(getClientesSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar clientes', AlertTypes.ERROR));
  }
}

export function* getClientesById({
  payload,
}: PayloadClientesSpecific): Generator<
  CallEffect<Clientes> | PutEffect<AnyAction>,
  void,
  ClientesType
> {
  try {
    const response = yield call(ClientesService.getByIdClientes, payload);

    yield put(getByIdClientesSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar cliente', AlertTypes.ERROR));
  }
}

export function* postClientes({
  payload,
}: PayloadClientesSpecific): Generator<
  CallEffect<Clientes> | PutEffect<AnyAction>,
  void,
  Clientes
> {
  try {
    const response = yield call(ClientesService.postClientes, payload);

    yield put(postClientesSuccess());
    console.log(response);
    yield put(showAlert('Cliente cadastrado com sucesso', AlertTypes.SUCCESS));
  } catch (error) {
    console.error(error);
    console.log('error: ', payload);
    yield put(showAlert('Erro ao cadastrar cliente', AlertTypes.ERROR));
  }
}
