import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { ProjetosService } from '../../../Services/projetos/projetos';
import { ItemProjeto } from '../itemProjeto/types';
import {
  getItemProjetosSuccess,
  getByIdProjetosSuccess,
  getProjetosAtrasadosSuccess,
  getProjetosSuccess,
  postItemProjetoSuccess,
  postProjetosSuccess,
  putProjetosSuccess,
  getGraficoPrazoAtrasadoSuccess,
} from './actions';
import { PrazoVsAtrasos, Projetos, ProjetosTypes } from './types';

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
interface PayloadItemProjetoSpecific {
  type: string;
  payload: ItemProjeto;
}

interface ItemProjetoData {
  type: ProjetosTypes;
  data: ItemProjeto[] | any;
}

interface PrazoAtrasadoData {
  type: ProjetosTypes;
  data: PrazoVsAtrasos | any;
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
  CallEffect<Projetos[]> | PutEffect<AnyAction>,
  void,
  ProjetosData
> {
  try {
    const response = yield call(ProjetosService.getProjetosAtrasados);

    yield put(getProjetosAtrasadosSuccess(response.data.content));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar projetos atrasados');
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

export function* putProjetos({
  payload,
}: PayloadProjetosSpecific): Generator<
  CallEffect<Projetos> | PutEffect<AnyAction>,
  void,
  ProjetosData
> {
  try {
    const response = yield call(
      ProjetosService.putProjetos,
      payload.id!,
      payload
    );

    yield put(putProjetosSuccess(response.data));
    toast.success('Projeto editado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao editar projeto');
  }
}

export function* deleteProjetos({
  payload,
}: PayloadProjetosSpecific): Generator<
  CallEffect<Projetos> | PutEffect<AnyAction>,
  void
> {
  try {
    yield call(ProjetosService.deleteProjetos, payload);

    toast.success('Projeto excluido com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao excluir projeto');
  }
}

export function* getGraficoPrazoAtrasado({
  filters,
}: any): Generator<
  CallEffect<PrazoVsAtrasos> | PutEffect<AnyAction>,
  void,
  PrazoAtrasadoData
> {
  try {
    const response = yield call(ProjetosService.getGraficoPrazoAtrasos, {
      dataFinal: '22/10/2022',
      dataInicial: '22/02/2022',
    });
    yield put(getGraficoPrazoAtrasadoSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar projetos com prazos atrasados');
  }
}

export function* getItemProjeto({
  payload,
}: PayloadProjetosSpecific): Generator<
  CallEffect<ItemProjeto[]> | PutEffect<AnyAction>,
  void,
  ItemProjetoData
> {
  try {
    const response = yield call(ProjetosService.getItemProjeto, payload);

    yield put(getItemProjetosSuccess(response.data));
  } catch (error) {
    console.error(error);
    toast.error('Erro ao pesquisar item projeto');
  }
}

export function* postItemProjetos({
  payload,
}: PayloadItemProjetoSpecific): Generator<
  CallEffect<ItemProjeto> | PutEffect<AnyAction>,
  void,
  ItemProjeto
> {
  try {
    yield call(ProjetosService.postItemProjetos, payload.projeto, payload);

    yield put(postItemProjetoSuccess());
    toast.success('Item do projeto cadastrado com sucesso');
  } catch (error) {
    console.error(error);
    console.log(payload);
    toast.error('Erro ao cadastrar item do projeto');
  }
}
