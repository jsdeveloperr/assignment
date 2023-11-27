import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IAlertDialog {
  dialogTitle: string;
  dialogContent: JSX.Element | string;
  approveBtnText?: string;
  cancelBtnText?: string;
  isButtonApprove?: boolean;
  isOpen?: boolean;
  fullWidth?: boolean;
  maxWidth?: any;
  onApprove?: () => void;
  onClose?: () => void;
}

const AlertDialog = ({
  dialogTitle,
  dialogContent,
  approveBtnText = 'Approve',
  cancelBtnText = 'Cancel',
  isOpen = false,
  isButtonApprove = true,
  fullWidth = false,
  maxWidth = 'xs',
  onApprove,
  onClose,
}: IAlertDialog) => {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleApprove = () => {
    onApprove?.();
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            backgroundColor: '#F6F7F9',
          }}
        >
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              bgcolor: '#f65e7b',
              color: '#fff',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#f65e7b',
                color: '#fff',
              },
            }}
            onClick={handleClose}
          >
            {cancelBtnText}
          </Button>
          {isButtonApprove && (
            <Button
              sx={{
                bgcolor: '#2bce9a',
                color: '#fff',
                textTransform: 'capitalize',
                '&:hover': {
                  bgcolor: '#2bce9a',
                  color: '#fff',
                },
              }}
              component="button"
              onClick={handleApprove}
              autoFocus
            >
              {approveBtnText}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
