import { Reducer } from 'redux';
import { EtapaProjetoState, EtapaProjetoTypes } from './types';

const Clientes = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
};

const Projetos = {
  cliente: Clientes,
  dataEntrega: '',
  dataPrevisao: '',
  dataInicial: '',
  dataVenda: '',
  descricao: '',
  nome: '',
};

const ItemProjeto = {
  codigo: '',
  nome: '',
  projeto: Projetos,
};

const Funcionarios = {
  id: '',
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  perfis: [''],
};

const Etapa = {
  id: '',
  nome: '',
  descricao: '',
};

const EtapaProjeto = {
  dataEntrega: '',
  dataPrevisao: '',
  etapa: Etapa,
  id: '',
  itemProjeto: ItemProjeto,
  percentualConcluido: '',
};

const AgendaDiaEAtrasados = [
  {
    idEtapa: '',
    itens: [
      {
        codigo: '',
        nomeItem: '',
        nomeProjeto: '',
      },
    ],
    nome: '',
  },
];

const INITIAL_STATE = {
  isLoading: false,
  etapaProjeto: [],
  etapaProjetoById: EtapaProjeto,
  etapaProjetoPut: EtapaProjeto,
  agendaDia: AgendaDiaEAtrasados,
  atrasadosEtapa: AgendaDiaEAtrasados,
  etapaProjetoDia: [],
};

const reducer: Reducer<EtapaProjetoState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case EtapaProjetoTypes.GETETAPAPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.GETETAPAPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapaProjeto: action.payload,
      };
    case EtapaProjetoTypes.GETBYIDETAPAPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.GETBYIDETAPAPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapaProjetoById: action.payload,
      };
    case EtapaProjetoTypes.PUTETAPAPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.PUTETAPAPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapaProjetoPut: action.payload,
      };
    case EtapaProjetoTypes.DELETEETAPAPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.DELETEETAPAPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case EtapaProjetoTypes.GETAGENDADIAREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.GETAGENDADIASUCCESS:
      return {
        ...state,
        isLoading: false,
        agendaDia: action.payload,
      };
    case EtapaProjetoTypes.GETDIAETAPAPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.GETDIAETAPAPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapaProjetoDia: action.payload,
      };
    case EtapaProjetoTypes.GETETAPASATRASADAREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapaProjetoTypes.GETETAPASATRASADASUCCESS:
      return {
        ...state,
        isLoading: false,
        atrasadosEtapa: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
