import { Funcionarios } from '../../store/ducks/funcionarios/types';
import apiDefault from '../api';

export const FuncionarioService = {
  // getFuncionarios: (): Promise<Funcionarios[]> =>
  //   apiDefault.get(`/planner/funcionario`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWNhc3JjdW5oYTAxQGdtYWlsLmNvbSIsImV4cCI6MTY2MzQzNjU5M30.YiQKQzKXyzHPvMQGhXqHeMEa8TWzIUn_O3oTHOQr-pl6ZGlo-hWUX5WO4KhQGsrAvDtwLerjm5PFZZHXq7LpJQ`
  //     }
  //   }),
  getFuncionarios: (): Promise<Funcionarios[]> =>
    apiDefault.get(`/planner/funcionario`),
  postFuncionarios: (form: Funcionarios): Promise<Funcionarios> =>
    apiDefault.post(`/planner/funcionario`, form),
  getByIdFuncionarios: (id: string): Promise<Funcionarios> =>
    apiDefault.get(`/planner/funcionario/${id}`),
  putFuncionarios: (id: string, form: Funcionarios): Promise<Funcionarios> =>
    apiDefault.put(`/planner/funcionario/${id}`, form),
};