import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ClientesService } from '../../../Services/clientes/clientes';
import {
  getByIdClientesSuccess,
  getClientesFilterSuccess,
  getClientesSuccess,
  postClientesSuccess,
  putClientesSuccess,
} from './actions';
import { ClienteCustomSearch, Clientes, ClientesTypes } from './types';

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

interface FilterCliente {
  type: ClientesTypes;
  payload: ClienteCustomSearch;
}

export function* getClientes({
  payload,
}: FilterCliente): Generator<
  CallEffect<Clientes[]> | PutEffect<AnyAction>,
  void,
  ClientesData
> {
  try {
    const response = yield call(ClientesService.getClientes, payload);

    yield put(getClientesSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar clientes');
  }
}

export function* getClientesFilter(): Generator<
  CallEffect<any> | PutEffect<AnyAction>,
  void,
  ClientesData
> {
  try {
    const response = yield call(ClientesService.getClientesFilter);

    yield put(getClientesFilterSuccess(response.data?.content));
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

export function* putClientes({
  payload,
}: PayloadClientesSpecific): Generator<
  CallEffect<Clientes> | PutEffect<AnyAction>,
  void,
  ClientesData
> {
  try {
    const response = yield call(
      ClientesService.putClientes,
      payload.id!,
      payload
    );

    yield put(putClientesSuccess(response.data));
    toast.success('Cliente editado com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao editar cliente');
  }
}

export function* deleteClientes({
  payload,
}: PayloadClientesSpecific): Generator<
  CallEffect<Clientes> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(ClientesService.deleteClientes, payload);

    toast.success('Cliente excluido com sucesso');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao excluir cliente');
  }
}
