import { Reducer } from 'redux';
import { EtapasTypes, EtapasState } from './types';

const INITIAL_STATE = {
  isLoading: false,
  etapas: [],
  etapasById: {
    nome: '',
    descricao: '',
  },
  etapasPut: {
    nome: '',
    descricao: '',
  },
};

const reducer: Reducer<EtapasState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case EtapasTypes.GETETAPASREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.GETETAPASSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapas: action.payload,
      };
    case EtapasTypes.GETBYIDETAPASREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.GETBYIDETAPASSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapasById: action.payload,
      };
    case EtapasTypes.POSTETAPASREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.POSTETAPASSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case EtapasTypes.PUTETAPASREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.PUTETAPASSUCCESS:
      return {
        ...state,
        isLoading: false,
        etapasPut: action.payload,
      };
    case EtapasTypes.DELETEETAPASREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.DELETEETAPASSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
