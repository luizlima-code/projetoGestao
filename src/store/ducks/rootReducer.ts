import { combineReducers } from 'redux';

import funcionarios from './funcionarios';
import projeto from './projeto';
import clientes from './clientes';
import etapas from './etapas';
import etapaProjeto from './etapaProjeto';
import itemProjeto from './itemProjeto';

const rootReducer = combineReducers({
  funcionarios,
  projeto,
  clientes,
  etapas,
  etapaProjeto,
  itemProjeto,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
