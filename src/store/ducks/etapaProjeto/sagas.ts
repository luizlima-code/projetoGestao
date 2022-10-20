import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { EtapaProjetoService } from '../../../Services/etapaProjeto/etapaProjeto';
import {
  getAgendaDiaSuccess,
  getAtrasadosEtapaSuccess,
  getByIdEtapaProjetoSuccess,
  getEtapaProjetoDiaSuccess,
  getEtapaProjetoSuccess,
  putEtapaProjetoSuccess,
} from './actions';
import { AgendaDiaEAtrasados, EtapaProjeto, EtapaProjetoTypes } from './types';

interface EtapaProjetoType {
  type: EtapaProjetoTypes;
  data: EtapaProjeto;
}

interface EtapaProjetoData {
  type: EtapaProjetoTypes;
  data: EtapaProjeto[] | any;
}

interface AgendaEAtrasadosData {
  type: EtapaProjetoTypes;
  data: AgendaDiaEAtrasados[] | any;
}

interface PayloadEtapaProjetoSpecific {
  type: string;
  payload: EtapaProjeto;
}

export function* getAllEtapaProjeto(): Generator<
  CallEffect<EtapaProjeto[]> | PutEffect<AnyAction>,
  void,
  EtapaProjetoData
> {
  try {
    const response = yield call(EtapaProjetoService.getAllEtapaProjeto);

    yield put(getEtapaProjetoSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar etapa do projeto');
  }
}

export function* getEtapaProjetoById({
  payload,
}: PayloadEtapaProjetoSpecific): Generator<
  CallEffect<EtapaProjeto> | PutEffect<AnyAction>,
  void,
  EtapaProjetoType
> {
  try {
    const response = yield call(
      EtapaProjetoService.getByIdEtapaProjeto,
      payload
    );

    yield put(getByIdEtapaProjetoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar etapa do projeto');
  }
}

export function* putEtapaProjeto({
  payload,
}: PayloadEtapaProjetoSpecific): Generator<
  CallEffect<EtapaProjeto> | PutEffect<AnyAction>,
  void,
  EtapaProjetoData
> {
  try {
    const response = yield call(
      EtapaProjetoService.putEtapaProjeto,
      payload.id!,
      payload
    );

    yield put(putEtapaProjetoSuccess(response.data));
    toast.success('Etapa do projeto editada com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao editar etapa do projeto');
  }
}

export function* deleteEtapaProjeto({
  payload,
}: PayloadEtapaProjetoSpecific): Generator<
  CallEffect<EtapaProjeto> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(EtapaProjetoService.deleteEtapaProjeto, payload);

    toast.success('Etapa do projeto excluida com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao excluir etapa do projeto');
  }
}

export function* getEtapaProjetoDia(): Generator<
  CallEffect<EtapaProjeto[]> | PutEffect<AnyAction>,
  void,
  EtapaProjetoData
> {
  try {
    const response = yield call(EtapaProjetoService.getEtapaProjetoDia);

    yield put(getEtapaProjetoDiaSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar etapa do projeto');
  }
}

export function* getAgendaDia(): Generator<
  CallEffect<AgendaDiaEAtrasados[]> | PutEffect<AnyAction>,
  void,
  AgendaEAtrasadosData
> {
  try {
    const response = yield call(EtapaProjetoService.getAgendaDia);

    yield put(getAgendaDiaSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar agenda do dia');
  }
}

export function* getAtrasadosEtapa(): Generator<
  CallEffect<AgendaDiaEAtrasados[]> | PutEffect<AnyAction>,
  void,
  AgendaEAtrasadosData
> {
  try {
    const response = yield call(EtapaProjetoService.getAtrasadosEtapa);

    yield put(getAtrasadosEtapaSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar etapas atrasadas');
  }
}
