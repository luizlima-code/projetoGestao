import { Reducer } from 'redux';
import { DesempenhoState, DesempenhoTypes } from './types';

const Funcionarios = {
  id: '',
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  perfis: [''],
};

const Desempenho = {
  data: '',
  funcionario: Funcionarios,
  id: '',
  observacao: '',
  percentualConcluido: 0,
};

const INITIAL_STATE = {
  isLoading: false,
  desempenhos: [],
  desempenhoById: Desempenho,
  desempenhoPut: Desempenho,
  desempenhoEtapa: [],
};

const reducer: Reducer<DesempenhoState> = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case DesempenhoTypes.GETDESEMPENHOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.GETDESEMPENHOSUCCESS:
      return {
        ...state,
        isLoading: false,
        desempenhos: action.payload,
      };
    case DesempenhoTypes.GETBYIDDESEMPENHOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.GETBYIDDESEMPENHOSUCCESS:
      return {
        ...state,
        isLoading: false,
        desempenhoById: action.payload,
      };
    case DesempenhoTypes.POSTDESEMPENHOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.POSTDESEMPENHOSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DesempenhoTypes.PUTDESEMPENHOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.PUTDESEMPENHOSUCCESS:
      return {
        ...state,
        isLoading: false,
        desempenhoPut: action.payload,
      };
    case DesempenhoTypes.DELETEDESEMPENHOREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.DELETEDESEMPENHOSUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DesempenhoTypes.GETDESEMPENHOETAPAREQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DesempenhoTypes.GETDESEMPENHOETAPASUCCESS:
      return {
        ...state,
        isLoading: false,
        desempenhoEtapa: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
