import {
  ClienteCustomSearch,
  Clientes,
} from '../../store/ducks/clientes/types';
import { apiDefault } from '../api';

export const ClientesService = {
  getClientes: (filters: ClienteCustomSearch): Promise<Clientes[]> =>
    apiDefault.get(`/planner/cliente`, {
      params: {
        ...filters,
      },
      responseType: 'json',
    }),
  getByIdClientes: (id: Clientes): Promise<Clientes> =>
    apiDefault.get(`/planner/cliente/${id}`),
  postClientes: (data: Clientes): Promise<Clientes> =>
    apiDefault.post(`/planner/cliente`, data),
  putClientes: (id: string, form: Clientes): Promise<Clientes> =>
    apiDefault.put(`/planner/cliente/${id}`, form),
  deleteClientes: (id: Clientes): Promise<Clientes> =>
    apiDefault.delete(`/planner/cliente/${id}`),
};
