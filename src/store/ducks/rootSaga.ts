import { all, takeLatest } from 'redux-saga/effects';
import { getFuncionarios, getFuncionariosById, postFuncionarios } from './funcionarios/sagas';
import { FuncionariosTypes } from './funcionarios/types';

export function* rootSaga(): Generator {
  return yield all([
    takeLatest(FuncionariosTypes.GETFUNCIONARIOSREQUEST, getFuncionarios),
    takeLatest(FuncionariosTypes.GETBYIDFUNCIONARIOSREQUEST, getFuncionariosById),
    takeLatest(FuncionariosTypes.POSTFUNCIONARIOSREQUEST, postFuncionarios),
  ])
};
