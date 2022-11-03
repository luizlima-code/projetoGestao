import { all, takeLatest } from 'redux-saga/effects';
import {
  deleteClientes,
  getClientes,
  getClientesById,
  getClientesFilter,
  postClientes,
  putClientes,
} from './clientes/sagas';
import { ClientesTypes } from './clientes/types';
import {
  deleteDesempenho,
  getAllDesempenhos,
  getDesempenhoById,
  getDesempenhoEtapa,
  postDesempenho,
  putDesempenho,
} from './desempenhos/sagas';
import { DesempenhoTypes } from './desempenhos/types';
import {
  deleteEtapaProjeto,
  getAgendaDia,
  getAllEtapaProjeto,
  getAtrasadosEtapa,
  getEtapaProjetoById,
  getEtapaProjetoDia,
  putEtapaProjeto,
} from './etapaProjeto/sagas';
import { EtapaProjetoTypes } from './etapaProjeto/types';
import {
  deleteEtapas,
  getEtapas,
  getEtapasById,
  postEtapas,
  putEtapas,
} from './etapas/sagas';
import { EtapasTypes } from './etapas/types';
import {
  deleteFuncionarios,
  getFuncionarios,
  getFuncionariosById,
  postFuncionarios,
  putFuncionarios,
} from './funcionarios/sagas';
import { FuncionariosTypes } from './funcionarios/types';
import {
  deleteItemProjeto,
  getAllItemProjetos,
  getEtapaProjetoByIdItem,
  getItemProjetoById,
  putItemProjeto,
} from './itemProjeto/sagas';
import { ItemProjetoTypes } from './itemProjeto/types';
import {
  deleteProjetos,
  getGraficoPrazoAtrasado,
  getItemProjeto,
  getProjetos,
  getProjetosAtrasados,
  getProjetosById,
  postItemProjetos,
  postProjetos,
  putProjetos,
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
    takeLatest(FuncionariosTypes.PUTFUNCIONARIOSREQUEST, putFuncionarios),
    takeLatest(FuncionariosTypes.DELETEFUNCIONARIOSREQUEST, deleteFuncionarios),
    // clientes
    takeLatest(ClientesTypes.GETCLIENTESREQUEST, getClientes),
    takeLatest(ClientesTypes.GETBYIDCLIENTESREQUEST, getClientesById),
    takeLatest(ClientesTypes.GETCLIENTESFILTERREQUEST, getClientesFilter),
    takeLatest(ClientesTypes.POSTCLIENTESREQUEST, postClientes),
    takeLatest(ClientesTypes.DELETECLIENTESREQUEST, deleteClientes),
    takeLatest(ClientesTypes.PUTCLIENTESREQUEST, putClientes),
    // etapas
    takeLatest(EtapasTypes.GETETAPASREQUEST, getEtapas),
    takeLatest(EtapasTypes.GETBYIDETAPASREQUEST, getEtapasById),
    takeLatest(EtapasTypes.POSTETAPASREQUEST, postEtapas),
    takeLatest(EtapasTypes.PUTETAPASREQUEST, putEtapas),
    takeLatest(EtapasTypes.DELETEETAPASREQUEST, deleteEtapas),
    // projetos
    takeLatest(ProjetosTypes.GETPROJETOSREQUEST, getProjetos),
    takeLatest(ProjetosTypes.GETBYIDPROJETOSREQUEST, getProjetosById),
    takeLatest(ProjetosTypes.POSTPROJETOSREQUEST, postProjetos),
    takeLatest(ProjetosTypes.PUTPROJETOSREQUEST, putProjetos),
    takeLatest(ProjetosTypes.DELETEPROJETOSREQUEST, deleteProjetos),
    takeLatest(ProjetosTypes.GETITEMPROJETOSREQUEST, getItemProjeto),
    takeLatest(ProjetosTypes.POSTITEMPROJETOREQUEST, postItemProjetos),
    takeLatest(ProjetosTypes.GETPROJETOSATRASADOSREQUEST, getProjetosAtrasados),
    takeLatest(
      ProjetosTypes.GETPRAZOVSATRASADOSREQUEST,
      getGraficoPrazoAtrasado
    ),
    // itemProjeto
    takeLatest(ItemProjetoTypes.GETALLITEMPROJETOREQUEST, getAllItemProjetos),
    takeLatest(ItemProjetoTypes.GETBYIDITEMPROJETOREQUEST, getItemProjetoById),
    takeLatest(ItemProjetoTypes.DELETEITEMPROJETOREQUEST, deleteItemProjeto),
    takeLatest(ItemProjetoTypes.PUTITEMPROJETOREQUEST, putItemProjeto),
    takeLatest(
      ItemProjetoTypes.GETETAPAPROJETOBYIDITEMREQUEST,
      getEtapaProjetoByIdItem
    ),
    takeLatest(ItemProjetoTypes.POSTETAPAPROJETOREQUEST, postClientes),
    // etapaProjeto
    takeLatest(EtapaProjetoTypes.GETETAPAPROJETOREQUEST, getAllEtapaProjeto),
    takeLatest(
      EtapaProjetoTypes.GETBYIDETAPAPROJETOREQUEST,
      getEtapaProjetoById
    ),
    takeLatest(EtapaProjetoTypes.DELETEETAPAPROJETOREQUEST, deleteEtapaProjeto),
    takeLatest(EtapaProjetoTypes.PUTETAPAPROJETOREQUEST, putEtapaProjeto),
    takeLatest(EtapaProjetoTypes.GETAGENDADIAREQUEST, getAgendaDia),
    takeLatest(EtapaProjetoTypes.GETETAPASATRASADAREQUEST, getAtrasadosEtapa),
    takeLatest(EtapaProjetoTypes.GETDIAETAPAPROJETOREQUEST, getEtapaProjetoDia),
    // desempenho
    takeLatest(DesempenhoTypes.GETDESEMPENHOREQUEST, getAllDesempenhos),
    takeLatest(DesempenhoTypes.GETBYIDDESEMPENHOREQUEST, getDesempenhoById),
    takeLatest(DesempenhoTypes.POSTDESEMPENHOREQUEST, postDesempenho),
    takeLatest(DesempenhoTypes.DELETEDESEMPENHOREQUEST, deleteDesempenho),
    takeLatest(DesempenhoTypes.PUTDESEMPENHOREQUEST, putDesempenho),
    takeLatest(DesempenhoTypes.GETDESEMPENHOETAPAREQUEST, getDesempenhoEtapa),
  ]);
}
