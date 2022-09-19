import { action } from 'typesafe-actions';
import { AppStatusTypes, AppStatus, AlertTypes } from './types';

export const changeAppStatus = (
  data: AppStatus
): { type: AppStatusTypes; payload: AppStatus } =>
  action(AppStatusTypes.CHANGE_APP_STATUS, data);

export const showAlert = (
  message: string,
  type: AlertTypes
): {
  type: AppStatusTypes.SHOW_ALERT;
  payload: { message: string; type: AlertTypes };
} => action(AppStatusTypes.SHOW_ALERT, { message, type });

export const dismissAlert = (): { type: AppStatusTypes } =>
  action(AppStatusTypes.DISMISS_ALERT);
