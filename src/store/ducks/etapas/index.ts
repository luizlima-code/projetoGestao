import { Reducer } from 'redux';
import { EtapasTypes, EtapasState, EtapasResponse } from './types';

const INITIAL_STATE = {
  isLoading: false,
  etapas: <EtapasResponse>{},
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
      console.log('request: ', action.payload);
      return {
        ...state,
        isLoading: true,
      };
    case EtapasTypes.GETBYIDETAPASSUCCESS:
      console.log('sucess: ', action.payload);
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
