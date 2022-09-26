import { combineReducers } from 'redux';

import appStatus from './appStatus';
import funcionarios from './funcionarios';


const rootReducer = combineReducers({
  appStatus,
  funcionarios,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
