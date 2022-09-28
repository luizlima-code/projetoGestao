import { Reducer } from 'redux';
import { ClientesTypes, Clientes, ClientesState } from './types';

const INITIAL_STATE = {
  isLoading: false,
  clientes: [],
  clientesById: {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
  },
};

const reducer: Reducer<ClientesState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case ClientesTypes.GETCLIENTESREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ClientesTypes.GETCLIENTESSUCCESS:
      return {
        ...state,
        isLoading: false,
        clientes: action.payload,
      };
    case ClientesTypes.GETBYIDCLIENTESREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ClientesTypes.GETBYIDCLIENTESSUCCESS:
      return {
        ...state,
        isLoading: false,
        clientesById: action.payload,
      };
    case ClientesTypes.POSTCLIENTESREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ClientesTypes.POSTCLIENTESSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ClientesTypes.PUTCLIENTESREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ClientesTypes.PUTCLIENTESSUCCESS:
      return {
        ...state,
        isLoading: false,
        clientes: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
