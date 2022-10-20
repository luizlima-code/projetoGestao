import { combineReducers } from 'redux';

import funcionarios from './funcionarios';
import projeto from './projeto';
import clientes from './clientes';
import desempenhos from './desempenhos';
import etapas from './etapas';
import etapaProjeto from './etapaProjeto';
import itemProjeto from './itemProjeto';

const rootReducer = combineReducers({
  clientes,
  desempenhos,
  etapaProjeto,
  etapas,
  funcionarios,
  itemProjeto,
  projeto,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
