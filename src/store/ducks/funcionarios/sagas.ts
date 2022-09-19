import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { FuncionarioService } from '../../../Services/funcionarios/funcionarios';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
import { getFuncionariosSuccess } from './actions';
import { FuncionariosTypes, Funcionarios } from './types';

interface FuncionariosType {
  type: string;
  payload: Funcionarios;
}

interface FuncionariosData {
  type: FuncionariosTypes;
  data: Funcionarios[];
}

export function* getFuncionarios(): Generator<CallEffect<Funcionarios[]> | PutEffect<AnyAction>, void, FuncionariosData> {
  try {
    // const response = yield call(FuncionarioService.getFuncionarios);

    console.log('Erros');
    // yield put(getFuncionariosSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar funcionarios', AlertTypes.ERROR));
  }
}
