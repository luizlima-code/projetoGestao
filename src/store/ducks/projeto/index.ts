import { Reducer } from 'redux';
import { ProjetosTypes, ProjetosState, ProjetoResponse } from './types';

const Clientes = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
};

const INITIAL_STATE = {
  isLoading: false,
  projetos: <ProjetoResponse>{},
  allProjetos: [],
  projetosById: {
    cliente: Clientes,
    dataEntrega: new Date().toISOString(),
    dataPrevisao: new Date().toISOString(),
    dataVenda: new Date().toISOString(),
    dataInicial: new Date().toISOString(),
    descricao: '',
    nome: '',
  },
  itemProjeto: [],
  projetosAtrasados: [],
  prazoVsAtrasos: {
    foraDoPrazo: 0,
    noPrazo: 0,
  },
  projetosPut: {
    cliente: Clientes,
    dataEntrega: new Date().toISOString(),
    dataPrevisao: new Date().toISOString(),
    dataVenda: new Date().toISOString(),
    dataInicial: new Date().toISOString(),
    descricao: '',
    nome: '',
  },
};

const reducer: Reducer<ProjetosState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case ProjetosTypes.GETPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        projetos: action.payload,
      };
    case ProjetosTypes.GETALLPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETALLPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        allProjetos: action.payload,
      };
    case ProjetosTypes.GETBYIDPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETBYIDPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        projetosById: action.payload,
      };
    case ProjetosTypes.POSTPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.POSTPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ProjetosTypes.PUTPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.PUTPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        projetosPut: action.payload,
      };
    case ProjetosTypes.DELETEPROJETOSREQUEST:
      return {
        ...state,
      };
    case ProjetosTypes.DELETEPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ProjetosTypes.GETPROJETOSATRASADOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETPROJETOSATRASADOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        projetosAtrasados: action.payload,
      };
    case ProjetosTypes.GETPRAZOVSATRASADOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETPRAZOVSATRASADOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        prazoVsAtrasos: action.payload,
      };
    case ProjetosTypes.GETITEMPROJETOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.GETITEMPROJETOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        itemProjeto: action.payload,
      };
    case ProjetosTypes.POSTITEMPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProjetosTypes.POSTITEMPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
