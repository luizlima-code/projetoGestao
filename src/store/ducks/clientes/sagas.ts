import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ClientesService } from '../../../Services/clientes/clientes';
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
    toast.error('Erro ao pesquisar clientes');
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
    toast.error('Erro ao pesquisar cliente');
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
    yield call(ClientesService.postClientes, payload);

    yield put(postClientesSuccess());
    toast.success('Cliente cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao cadastrar cliente');
  }
}
