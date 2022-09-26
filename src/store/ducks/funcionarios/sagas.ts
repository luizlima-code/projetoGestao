import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { FuncionarioService } from '../../../Services/funcionarios/funcionarios';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
import { getByIdFuncionariosSuccess, getFuncionariosSuccess } from './actions';
import { FuncionariosTypes, Funcionarios } from './types';

interface FuncionariosType {
  type: string;
  data: Funcionarios;
}

interface FuncionariosData {
  type: FuncionariosTypes;
  data: Funcionarios[] | any;
}

interface PayloadFuncionarioSpecific {
  type: number;
  data: Funcionarios;
}

export function* getFuncionarios(): Generator<CallEffect<Funcionarios[]> | PutEffect<AnyAction>, void, FuncionariosData> {
  try {
    const response = yield call(FuncionarioService.getFuncionarios);

    yield put(getFuncionariosSuccess(response.data.content));
  } catch (error) {
    console.error('novo: ', error);
    yield put(showAlert('Erro ao pesquisar funcionarios', AlertTypes.ERROR));
  }
}

export function* getFuncionariosById({ type }: FuncionariosType): Generator<CallEffect<Funcionarios> | PutEffect<AnyAction>, void, FuncionariosType> {
  try {
    const response = yield call(FuncionarioService.getByIdFuncionarios, type);

    yield put(getByIdFuncionariosSuccess(response.data));
  } catch (error) {
    console.error('novo: ', error);
    yield put(showAlert('Erro ao pesquisar funcionario', AlertTypes.ERROR));
  }
}

export function* postFuncionarios({ type }: FuncionariosType): Generator<CallEffect<Funcionarios> | PutEffect<AnyAction>, void, FuncionariosType> {
  try {
    const response = yield call(FuncionarioService.getByIdFuncionarios, type);

    yield put(getByIdFuncionariosSuccess(response.data));
  } catch (error) {
    console.error('novo: ', error);
    yield put(showAlert('Erro ao pesquisar funcionario', AlertTypes.ERROR));
  }
}
