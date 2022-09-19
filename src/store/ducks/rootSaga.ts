import { all, takeLatest } from 'redux-saga/effects';
import { getFuncionarios } from './funcionarios/sagas';
import { FuncionariosTypes } from './funcionarios/types';



export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(
      FuncionariosTypes.GETFUNCIONARIOSREQUEST,
      getFuncionarios
    ),
  ]);
}
