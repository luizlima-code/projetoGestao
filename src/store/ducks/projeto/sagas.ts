import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ProjetosService } from '../../../Services/projetos/projetos';
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
    toast.error('Erro ao pesquisar projetos');
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
    toast.error('Erro ao pesquisar projeto');
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
    toast.error('Erro ao pesquisar projetos atrasados');
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
    toast.error('Erro ao pesquisar item projeto');
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
    yield call(ProjetosService.postProjetos, payload);

    yield put(postProjetosSuccess());
    toast.success('Projeto cadastrado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao cadastrar projeto');
  }
}
