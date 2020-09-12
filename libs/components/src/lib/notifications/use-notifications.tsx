import { toast } from 'react-toastify';
import {
  VariantNotificationType,
  MsgNotificationType,
  SettingsNotificationsModel,
} from '@park-szesnasta/utilities';

type useNotificationProps = {
  msg: MsgNotificationType;
  variant?: VariantNotificationType;
  settings?: SettingsNotificationsModel;
};

export const useNotification = ({
  msg,
  variant,
  settings,
}: useNotificationProps) => {
  let currentToast;
  const currentMsg = msg ? msg : '';

  switch (variant) {
    case 'success':
      currentToast = toast.success(currentMsg, { ...settings });
      break;
    case 'error':
      currentToast = toast.error(currentMsg, { ...settings, autoClose: false });
      break;
    case 'warning':
      currentToast = toast.warning(currentMsg, { ...settings });
      break;
    case 'info':
      currentToast = toast.info(currentMsg, { ...settings });
      break;
    case 'dark':
      currentToast = toast.dark(currentMsg, { ...settings });
      break;
    default:
      currentToast = toast.success(currentMsg, { ...settings });
      break;
  }
  return currentToast;
};
