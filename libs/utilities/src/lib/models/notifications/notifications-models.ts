import { ReactElement } from 'react';

export type VariantNotificationType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'dark'
  | undefined;

export type MsgNotificationType = string | ReactElement;

export type PositionNotificationType =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

export type SettingsNotificationsModel = {
  position?: PositionNotificationType;
  autoClose?: number;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: boolean;
  rtl?: boolean;
  pauseOnFocusLoss?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
};
