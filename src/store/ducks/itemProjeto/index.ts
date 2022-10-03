import { Reducer } from 'redux';
import { ItemProjetoState, ItemProjetoTypes } from './types';

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

const INITIAL_STATE = {
  isLoading: false,
  itemProjetos: [],
  itemProjetoById: {
    codigo: '',
    nome: '',
    projeto: Projetos,
  },
  putItemProjeto: {
    codigo: '',
    nome: '',
    projeto: Projetos,
  },
  etapaProjetoByIdItem: [],
};

const reducer: Reducer<ItemProjetoState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case ItemProjetoTypes.GETITEMPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ItemProjetoTypes.GETITEMPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        itemProjetos: action.payload,
      };
    case ItemProjetoTypes.GETBYIDITEMPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ItemProjetoTypes.GETBYIDITEMPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        itemProjetoById: action.payload,
      };
    case ItemProjetoTypes.PUTITEMPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ItemProjetoTypes.PUTITEMPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
        putItemProjeto: action.payload,
      };
    case ItemProjetoTypes.DELETEITEMPROJETOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ItemProjetoTypes.DELETEITEMPROJETOSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ItemProjetoTypes.GETETAPAPROJETOBYIDITEMREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ItemProjetoTypes.GETETAPAPROJETOBYIDITEMSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapaProjetoByIdItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
