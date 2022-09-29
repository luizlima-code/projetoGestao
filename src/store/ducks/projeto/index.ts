import { Reducer } from 'redux';
import { ProjetosTypes, Projetos, ProjetosState } from './types';

const Clientes = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
}

const INITIAL_STATE = {
  isLoading: false,
  projetos: [],
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
        clientes: action.payload,
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
        clientesById: action.payload,
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
        clientes: action.payload,
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
        clientes: action.payload,
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
        clientesById: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
