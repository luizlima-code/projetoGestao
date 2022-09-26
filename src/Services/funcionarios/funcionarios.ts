import { Funcionarios } from '../../store/ducks/funcionarios/types';
import apiDefault from '../api';
import apiLogin from '../apiLogin';

export const FuncionarioService = {
  // getFuncionarios: (): Promise<Funcionarios[]> => (
  //   console.log('nenhum erro'),
  //   apiLogin.get(`/planner/funcionario`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWNhc3JjdW5oYTAxQGdtYWlsLmNvbSIsImV4cCI6MTY2MzgxNTYyMn0.B6XQgzen_kN8qWWEg7pwsFyKfDhzabGZb5Vds41EQoQmjbk8uijPRqi0J4sAFpwwOaTuldt_6FnRxynFIv0PHQ`
  //     }
  //   })),
  getFuncionarios: (): Promise<Funcionarios[]> =>
    apiDefault.get(`/planner/funcionario`),
  postFuncionarios: (form: Funcionarios): Promise<Funcionarios> =>
    apiDefault.post(`/planner/funcionario`, form),
  getByIdFuncionarios: (id: string): Promise<Funcionarios> =>
    apiDefault.get(`/planner/funcionario/${id}`),
  putFuncionarios: (id: string, form: Funcionarios): Promise<Funcionarios> =>
    apiDefault.put(`/planner/funcionario/${id}`, form),
};