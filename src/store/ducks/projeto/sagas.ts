import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ProjetosService } from '../../../Services/projetos/projetos';
import { showAlert } from '../appStatus/actions';
import { AlertTypes } from '../appStatus/types';
import {
  getByIdItemProjetosSuccess,
  getByIdProjetosSuccess,
  getProjetosAtrasadosSuccess,
  getProjetosSuccess,
  postProjetosSuccess,
} from './actions';
import {
  ItemProjeto,
  Projetos,
  ProjetosAtrasados,
  ProjetosTypes,
} from './types';

interface ProjetosType {
  type: ProjetosTypes;
  data: Projetos;
}

interface ProjetosData {
  type: ProjetosTypes;
  data: Projetos[] | any;
}

interface PayloadProjetosSpecific {
  type: string;
  payload: Projetos;
}

interface ItemProjetoData {
  type: ProjetosTypes;
  data: ItemProjeto[] | any;
}

interface PayloadItemProjetoSpecific {
  type: string;
  payload: ItemProjeto;
}

interface ProjetosAtrasadosData {
  type: ProjetosTypes;
  data: ProjetosAtrasados[] | any;
}

export function* getProjetos(): Generator<
  CallEffect<Projetos[]> | PutEffect<AnyAction>,
  void,
  ProjetosData
> {
  try {
    const response = yield call(ProjetosService.getProjetos);

    yield put(getProjetosSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar projetos', AlertTypes.ERROR));
  }
}

export function* getProjetosById({
  payload,
}: PayloadProjetosSpecific): Generator<
  CallEffect<Projetos> | PutEffect<AnyAction>,
  void,
  ProjetosType
> {
  try {
    const response = yield call(ProjetosService.getByIdProjetos, payload);

    yield put(getByIdProjetosSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar projeto', AlertTypes.ERROR));
  }
}

export function* getProjetosAtrasados(): Generator<
  CallEffect<ProjetosAtrasados[]> | PutEffect<AnyAction>,
  void,
  ProjetosAtrasadosData
> {
  try {
    const response = yield call(ProjetosService.getProjetosAtrasados);

    yield put(getProjetosAtrasadosSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    yield put(
      showAlert('Erro ao pesquisar projetos atrasados', AlertTypes.ERROR)
    );
  }
}

export function* getItemProjeto({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto[]> | PutEffect<AnyAction>,
  void,
  ItemProjetoData
> {
  try {
    const response = yield call(ProjetosService.getItemProjeto, payload);

    yield put(getByIdItemProjetosSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(showAlert('Erro ao pesquisar item projeto', AlertTypes.ERROR));
  }
}

export function* postProjetos({
  payload,
}: PayloadProjetosSpecific): Generator<
  CallEffect<Projetos> | PutEffect<AnyAction>,
  void,
  Projetos
> {
  try {
    const response = yield call(ProjetosService.postProjetos, payload);

    yield put(postProjetosSuccess());
    console.log(response);
    yield put(showAlert('Projeto cadastrado com sucesso', AlertTypes.SUCCESS));
  } catch (error) {
    console.error(error);
    console.log('error: ', payload);
    yield put(showAlert('Erro ao cadastrar projeto', AlertTypes.ERROR));
  }
}
