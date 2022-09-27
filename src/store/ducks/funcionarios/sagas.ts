import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { FuncionarioService } from '../../../Services/funcionarios/funcionarios';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
import { getByIdFuncionariosSuccess, getFuncionariosSuccess, postFuncionariosSuccess } from './actions';
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

export function* getFuncionarios(): Generator<CallEffect<Funcionarios[]> | PutEffect<AnyAction>, void, FuncionariosData> {
  try {
    const response = yield call(FuncionarioService.getFuncionarios);

    yield put(getFuncionariosSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar funcionarios', AlertTypes.ERROR));
  }
}

export function* getFuncionariosById({ payload }: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void,
  FuncionariosType
> {
  try {
    const response = yield call(FuncionarioService.getByIdFuncionarios, payload);

    yield put(getByIdFuncionariosSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar funcionario', AlertTypes.ERROR));
  }
}

export function* postFuncionarios({ payload }: PayloadFuncionarioSpecific): Generator<
  CallEffect<Funcionarios> | PutEffect<AnyAction>,
  void,
  Funcionarios
> {
  try {
    const response = yield call(FuncionarioService.postFuncionarios, payload);

    yield put(postFuncionariosSuccess());
    console.log(response);
    yield put(showAlert('Funcionário cadastrado com sucesso', AlertTypes.SUCCESS));
  } catch (error) {
    console.error(error);
    console.log('error: ', payload);
    yield put(showAlert('Erro ao cadastrar funcionario', AlertTypes.ERROR));
  }
}
