import { all, takeLatest } from 'redux-saga/effects';
import { getClientes, getClientesById, postClientes } from './clientes/sagas';
import { ClientesTypes } from './clientes/types';
import { getEtapas, getEtapasById, postEtapas } from './etapas/sagas';
import { EtapasTypes } from './etapas/types';
import {
  getFuncionarios,
  getFuncionariosById,
  postFuncionarios,
} from './funcionarios/sagas';
import { FuncionariosTypes } from './funcionarios/types';
import {
  getGraficoPrazoAtrasado,
  getItemProjeto,
  getProjetos,
  getProjetosAtrasados,
  getProjetosById,
  postProjetos,
} from './projeto/sagas';
import { ProjetosTypes } from './projeto/types';

export function* rootSaga(): Generator {
  return yield all([
    // funcionarios
    takeLatest(FuncionariosTypes.GETFUNCIONARIOSREQUEST, getFuncionarios),
    takeLatest(
      FuncionariosTypes.GETBYIDFUNCIONARIOSREQUEST,
      getFuncionariosById
    ),
    takeLatest(FuncionariosTypes.POSTFUNCIONARIOSREQUEST, postFuncionarios),
    // clientes
    takeLatest(ClientesTypes.GETCLIENTESREQUEST, getClientes),
    takeLatest(ClientesTypes.GETBYIDCLIENTESREQUEST, getClientesById),
    takeLatest(ClientesTypes.POSTCLIENTESREQUEST, postClientes),
    // etapas
    takeLatest(EtapasTypes.GETETAPASREQUEST, getEtapas),
    takeLatest(EtapasTypes.GETBYIDETAPASREQUEST, getEtapasById),
    takeLatest(EtapasTypes.POSTETAPASREQUEST, postEtapas),
    // projetos
    takeLatest(ProjetosTypes.GETPROJETOSREQUEST, getProjetos),
    takeLatest(ProjetosTypes.GETBYIDPROJETOSREQUEST, getProjetosById),
    takeLatest(ProjetosTypes.GETITEMPROJETOSREQUEST, getItemProjeto),
    takeLatest(ProjetosTypes.GETPROJETOSATRASADOSREQUEST, getProjetosAtrasados),
    takeLatest(
      ProjetosTypes.GETPRAZOVSATRASADOSREQUEST,
      getGraficoPrazoAtrasado
    ),
    takeLatest(ProjetosTypes.POSTPROJETOSREQUEST, postProjetos),
  ]);
}
