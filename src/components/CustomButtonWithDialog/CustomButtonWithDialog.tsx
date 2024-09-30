import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';

// LOCAL IMPORT
import {
  CustomButton,
  CustomButtonPropsInterface,
} from '../CustomButton/CustomButton';

interface CustomButtonWithDialogPropsInterface {
  buttonProps: CustomButtonPropsInterface;
  children: React.ReactNode;
  dialogTitle?: string;
}

export const CustomButtonWithDialog: React.FC<
  CustomButtonWithDialogPropsInterface
> = ({ buttonProps, children, dialogTitle }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpened(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpened(false);
  };

  return (
    <>
      <CustomButton {...buttonProps} onClick={handleOpenDialog} />
      <Dialog
        open={isDialogOpened}
        onClose={handleCloseDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        {dialogTitle && (
          <DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
        )}
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
