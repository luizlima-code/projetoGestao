/**
 * Action Types
 */
export enum AppStatusTypes {
  CHANGE_APP_STATUS = '@appStatus/CHANGE_APP_STATUS',
  USER_LOGIN_REQUEST = '@appStatus/USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = '@appStatus/USER_LOGIN_SUCCESS',
  USER_LOGOUT = '@appStatus/USER_LOGOUT',
  SHOW_ALERT = '@appStatus/SHOW_ALERT',
  DISMISS_ALERT = '@appStatus/DISMISS_ALERT',
  CHANGE_MOVIMENT_DATA = '@appStatus/CHANGE_MOVIMENT_DATA',
  START_ACTION = '@appStatus/START_ACTION',
  STOP_ACTION = '@appStatus/STOP_ACTION',
}

/**
 * Data Types
 */
export interface AppStatus {
  name: string;
  value: number | string | boolean;
}

export interface Alert {
  message: string;
  isOpened: boolean;
  type: AlertTypes;
}

export enum AlertTypes {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO',
  ERROR = 'ERROR',
}

/**
 * State Type
 */
export interface ActionLoaderType {
  name: string;
  params?: any;
}

export interface AppStatusState {
  loading: boolean;
  loadingMessage: string;
  pageTitle: string;
  projectName: string;
  projectVersion: string;
  movimentDate: Date;
  alert: Alert;
  loader: {
    actions: ActionLoaderType[];
  };
}
