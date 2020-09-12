import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import * as React from 'react';
import { SettingsNotificationsModel } from '@park-szesnasta/utilities';

export const Notifications = ({
  position,
  autoClose,
  hideProgressBar,
  newestOnTop,
  closeOnClick,
  rtl,
  pauseOnFocusLoss,
  draggable,
  pauseOnHover,
}: SettingsNotificationsModel) => {
  return (
    <ToastContainer
      position={position ?? 'bottom-left'}
      autoClose={autoClose ?? 5000}
      hideProgressBar={hideProgressBar ?? false}
      newestOnTop={newestOnTop ?? false}
      closeOnClick={closeOnClick ?? true}
      rtl={rtl ?? false}
      pauseOnFocusLoss={pauseOnFocusLoss ?? true}
      draggable={draggable ?? true}
      pauseOnHover={pauseOnHover ?? true}
    />
  );
};
