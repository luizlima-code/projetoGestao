import { Reducer } from 'redux';
import { AppStatusTypes, AppStatusState, AlertTypes } from './types';

const INITIAL_STATE: AppStatusState = {
  loading: false,
  loadingMessage: 'Carregando',
  pageTitle: '',
  projectName: '',
  projectVersion: '',
  movimentDate: new Date(),
  alert: {
    isOpened: false,
    message: '',
    type: AlertTypes.INFO,
  },
  loader: {
    actions: [],
  },
};

const reducer: Reducer<AppStatusState> = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { loader } = state;
  const { actions } = loader;

  switch (action.type) {
    case AppStatusTypes.CHANGE_APP_STATUS:
      return { ...state, [payload.name]: payload.value };
    case AppStatusTypes.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case AppStatusTypes.USER_LOGIN_SUCCESS:
      return { ...state, isLogged: true, loading: false };
    case AppStatusTypes.USER_LOGOUT:
      return { ...state, isLogged: false, loading: false };
    case AppStatusTypes.SHOW_ALERT:
      return {
        ...state,
        alert: { isOpened: true, message: payload.message, type: payload.type },
      };
    case AppStatusTypes.DISMISS_ALERT:
      return {
        ...state,
        alert: { isOpened: false, message: '', type: AlertTypes.INFO },
      };
    case AppStatusTypes.CHANGE_MOVIMENT_DATA:
      return { ...state, movimentDate: payload };
    case AppStatusTypes.START_ACTION:
      return {
        ...state,
        loader: { ...loader, actions: [...actions, payload.action] },
      };
    case AppStatusTypes.STOP_ACTION:
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter(act => act.name !== payload.name),
        },
      };
    default:
      return state;
  }
};

export default reducer;
