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
      position={position ? position : 'bottom-left'}
      autoClose={autoClose ? autoClose : 5000}
      hideProgressBar={hideProgressBar ? hideProgressBar : false}
      newestOnTop={newestOnTop ? newestOnTop : false}
      closeOnClick={closeOnClick ? closeOnClick : true}
      rtl={rtl ? rtl : false}
      pauseOnFocusLoss={pauseOnFocusLoss ? pauseOnFocusLoss : true}
      draggable={draggable ? draggable : true}
      pauseOnHover={pauseOnHover ? pauseOnHover : true}
    />
  );
};
