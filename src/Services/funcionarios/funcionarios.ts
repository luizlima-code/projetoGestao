import {
  FuncionarioCustomSearch,
  Funcionarios,
} from '../../store/ducks/funcionarios/types';
import { apiDefault } from '../api';

export const FuncionarioService = {
  getFuncionarios: (
    filters: FuncionarioCustomSearch
  ): Promise<Funcionarios[]> =>
    apiDefault.get(`/planner/funcionario`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getByIdFuncionarios: (id: Funcionarios): Promise<Funcionarios> =>
    apiDefault.get(`/planner/funcionario/${id}`),
  postFuncionarios: (data: Funcionarios): Promise<Funcionarios> =>
    apiDefault.post(`/planner/funcionario`, data),
  putFuncionarios: (id: string, form: Funcionarios): Promise<Funcionarios> =>
    apiDefault.put(`/planner/funcionario/${id}`, form),
  deleteFuncionarios: (id: Funcionarios): Promise<Funcionarios> =>
    apiDefault.delete(`/planner/funcionario/${id}`),
};
