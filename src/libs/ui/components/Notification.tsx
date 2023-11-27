import React from 'react';

import { Snackbar, Alert, SnackbarCloseReason } from '@mui/material';

import { useNotification } from '../../hooks/useNotification';

const Notification = (): JSX.Element => {
  const { notification, clearNotification } = useNotification();

  const handleClose = (_: unknown, reason?: SnackbarCloseReason) =>
    reason !== 'clickaway' && clearNotification();

  const { vertical, horizontal } = notification;

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      anchorOrigin={{ vertical, horizontal }}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={notification.type}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
