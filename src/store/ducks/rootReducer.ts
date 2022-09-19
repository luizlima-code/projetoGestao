import { combineReducers, Reducer } from 'redux';

import appStatus from './appStatus';
import funcionariosState from './funcionarios';


const createRootReducer = (): Reducer =>
  combineReducers({
    appStatus,
    funcionariosState,
  });

export default createRootReducer;
