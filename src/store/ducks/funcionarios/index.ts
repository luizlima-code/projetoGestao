import { Reducer } from 'redux';
import { FuncionariosTypes, FuncionariosState } from './types';

const INITIAL_STATE = {
  isLoading: false,
  funcionarios: [],
  funcionarioById: {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
  },
  funcionarioPut: {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
  },
};

const reducer: Reducer<FuncionariosState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case FuncionariosTypes.GETFUNCIONARIOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FuncionariosTypes.GETFUNCIONARIOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        funcionarios: action.payload,
      };
    case FuncionariosTypes.GETBYIDFUNCIONARIOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FuncionariosTypes.GETBYIDFUNCIONARIOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        funcionarioById: action.payload,
      };
    case FuncionariosTypes.POSTFUNCIONARIOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FuncionariosTypes.POSTFUNCIONARIOSSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FuncionariosTypes.PUTFUNCIONARIOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FuncionariosTypes.PUTFUNCIONARIOSSUCCESS:
      return {
        ...state,
        isLoading: false,
        funcionarios: action.payload,
      };
    case FuncionariosTypes.DELETEFUNCIONARIOSREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FuncionariosTypes.DELETEFUNCIONARIOSSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
