import { combineReducers } from 'redux';

import funcionarios from './funcionarios';
import projeto from './projeto';
import clientes from './clientes';
import etapas from './etapas';

const rootReducer = combineReducers({
  funcionarios,
  projeto,
  clientes,
  etapas,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
