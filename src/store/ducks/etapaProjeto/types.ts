import { PageableResponse } from '../../../config/types';
import { Funcionarios } from '../funcionarios/types';
import { ItemProjeto } from '../itemProjeto/types';

export enum EtapaProjetoTypes {
  GETETAPAPROJETOREQUEST = '@etapaProjeto/GET_ETAPA_PROJETOS_REQUEST',
  GETETAPAPROJETOSUCCESS = '@etapaProjeto/GET_ETAPA_PROJETOS_SUCCESS',
  GETBYIDETAPAPROJETOREQUEST = '@etapaProjeto/GET_BY_ID_ETAPA_PROJETOS_REQUEST',
  GETBYIDETAPAPROJETOSUCCESS = '@etapaProjeto/GET_BY_ID_ETAPA_PROJETOS_SUCCESS',
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
    desempenhos: [
      {
        data: string;
        funcionario: Funcionarios;
        id?: string;
        observacao: string;
        percentualConcluido: string;
      }?
    ];
    id?: string;
    nome: string;
  };
  id?: string;
  itemProjeto: ItemProjeto;
  percentualConcluido: string;
}

export interface AgendaDiaEAtrasados {
  idEtapa: string;
  itens: [
    {
      codigo: string;
      nomeItem: string;
      nomeProjeto: string;
    }
  ];
  nome: string;
}

export type ProjetoResponse = PageableResponse<EtapaProjeto>;

export interface EtapaProjetoState {
  readonly isLoading: boolean;
  readonly etapaProjeto: EtapaProjeto[];
  readonly etapaProjetoById: EtapaProjeto;
  readonly etapaProjetoPut: EtapaProjeto;
  readonly agendaDia: AgendaDiaEAtrasados[];
  readonly atrasadosEtapa: AgendaDiaEAtrasados[];
  readonly etapaProjetoDia: EtapaProjeto[];
}
