import { Reducer } from 'redux';
import { EtapasTypes, Etapas, EtapasState } from './types';

const INITIAL_STATE = {
  isLoading: false,
  etapas: [],
  etapasById: {
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
        ETAPAS: action.payload,
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
        etapas: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
