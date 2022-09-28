import { combineReducers } from 'redux';

import appStatus from './appStatus';
import funcionarios from './funcionarios';
import projeto from './projeto';
import clientes from './clientes';
import etapas from './etapas';

const rootReducer = combineReducers({
  appStatus,
  funcionarios,
  projeto,
  clientes,
  etapas,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
