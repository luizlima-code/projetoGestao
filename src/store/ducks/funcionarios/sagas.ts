import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { FuncionarioService } from '../../../Services/funcionarios/funcionarios';
import {
  getByIdFuncionariosSuccess,
  getFuncionariosSuccess,
  postFuncionariosSuccess,
  putFuncionariosSuccess,
} from './actions';
import { FuncionariosTypes, Funcionarios } from './types';

interface FuncionariosType {
  type: FuncionariosTypes;
  data: Funcionarios;
}

interface FuncionariosData {
  type: FuncionariosTypes;
  data: Funcionarios[] | any;
}

interface PayloadFuncionarioSpecific {
  type: string;
  payload: Funcionarios;
}

export function* getFuncionarios(): Generator<
  CallEffect<Funcionarios[]> | PutEffect<AnyAction>,
  void,
  FuncionariosData
> {
  try {
    const response = yield call(FuncionarioService.getFuncionarios);

    yield put(getFuncionariosSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar funcionarios');
  }
}

export function* getFuncionariosById({
  payload,
}: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void,
  FuncionariosType
> {
  try {
    const response = yield call(
      FuncionarioService.getByIdFuncionarios,
      payload
    );

    yield put(getByIdFuncionariosSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar funcionario');
  }
}

export function* postFuncionarios({
  payload,
}: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void,
  Funcionarios
> {
  try {
    yield call(FuncionarioService.postFuncionarios, payload);

    yield put(postFuncionariosSuccess());
    toast.success('Funcionario cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    toast.error('Erro ao cadastrar funcionario');
  }
}

export function* putFuncionarios({
  payload,
}: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void,
  FuncionariosData
> {
  try {
    const response = yield call(
      FuncionarioService.putFuncionarios,
      payload.id!,
      payload
    );

    yield put(putFuncionariosSuccess(response.data));
    toast.success('Funcionario editado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao editar funcionario');
  }
}

export function* deleteFuncionarios({
  payload,
}: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(FuncionarioService.deleteFuncionarios, payload);

    toast.success('Funcionario excluido com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao excluir funcionario');
  }
}
