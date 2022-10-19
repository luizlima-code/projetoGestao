import { PageableResponse } from '../../../config/types';
import { Desempenho } from '../desempenhos/types';
import { Etapas } from '../etapas/types';
import { ItemProjeto } from '../itemProjeto/types';

export enum EtapaProjetoTypes {
  GETETAPAPROJETOREQUEST = '@etapaProjeto/GET_ETAPA_PROJETO_REQUEST',
  GETETAPAPROJETOSUCCESS = '@etapaProjeto/GET_ETAPA_PROJETO_SUCCESS',
  GETBYIDETAPAPROJETOREQUEST = '@etapaProjeto/GET_BY_ID_ETAPA_PROJETO_REQUEST',
  GETBYIDETAPAPROJETOSUCCESS = '@etapaProjeto/GET_BY_ID_ETAPA_PROJETO_SUCCESS',
  PUTETAPAPROJETOREQUEST = '@etapaProjeto/PUT_ETAPA_PROJETO_REQUEST',
  PUTETAPAPROJETOSUCCESS = '@etapaProjeto/PUT_ETAPA_PROJETO_SUCCESS',
  DELETEETAPAPROJETOREQUEST = '@etapaProjeto/DELETE_ETAPA_PROJETO_REQUEST',
  DELETEETAPAPROJETOSUCCESS = '@etapaProjeto/DELETE_ETAPA_PROJETO_SUCCESS',
  // AGENDA DIA
  GETAGENDADIAREQUEST = '@etapaProjeto/GET_AGENDA_DIA_REQUEST',
  GETAGENDADIASUCCESS = '@etapaProjeto/GET_AGENDA_DIA_SUCCESS',
  // ETAPAS ATRASADAS
  GETETAPASATRASADAREQUEST = '@etapaProjeto/GET_ETAPA_ATRASADAS_REQUEST',
  GETETAPASATRASADASUCCESS = '@etapaProjeto/GET_ETAPA_ATRASADAS_SUCCESS',
  // DIA ETAPA PROJETO
  GETDIAETAPAPROJETOREQUEST = '@etapaProjeto/GET_DIA_ETAPA_PROJETO_REQUEST',
  GETDIAETAPAPROJETOSUCCESS = '@etapaProjeto/GET_DIA_ETAPA_PROJETO_SUCCESS',
}

export interface EtapaProjeto {
  dataEntrega: string;
  dataPrevisao: string;
  etapa: {
    descricao: string;
    id?: string;
    nome: string;
  };
  id?: string;
  itemProjeto: ItemProjeto;
  percentualConcluido: string;
}

interface Itens {
  codigo: string;
  nomeItem: string;
  nomeProjeto: string;
}

export interface AgendaDiaEAtrasados {
  idEtapa: string;
  itens: Itens[];
  nome: string;
}

export type EtapaProjetoResponse = PageableResponse<EtapaProjeto>;

export interface EtapaProjetoState {
  readonly isLoading: boolean;
  readonly etapaProjeto: EtapaProjeto[];
  readonly etapaProjetoById: EtapaProjeto;
  readonly etapaProjetoPut: EtapaProjeto;
  readonly agendaDia: AgendaDiaEAtrasados[];
  readonly atrasadosEtapa: AgendaDiaEAtrasados[];
  readonly etapaProjetoDia: EtapaProjeto[];
}
