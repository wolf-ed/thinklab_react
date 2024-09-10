import { Snackbar, Button, Alert } from '@mui/material';

export interface CustomSnackBarProps {
  isVisible: boolean;
  onDismissSnackBar?: () => void;
  message: string;
  actionText?: string;
  action?: () => void;
  duration?: number;
  position?: 'top' | 'bottom';
  severity?: 'error' | 'warning' | 'info' | 'success';
}

export const CustomSnackBar = ({
  isVisible,
  message: snackText,
  action,
  position = 'bottom',
  duration,
  actionText = '',
  severity = 'info',
  onDismissSnackBar = () => {},
}: CustomSnackBarProps) => {
  const snackbarPosition = {
    vertical: position,
    horizontal: 'center' as 'center',
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={duration ?? 2500}
      onClose={onDismissSnackBar}
      anchorOrigin={snackbarPosition}
    >
      <Alert
        onClose={onDismissSnackBar}
        severity={severity}
        action={
          actionText && (
            <Button color="inherit" size="small" onClick={action}>
              {actionText}
            </Button>
          )
        }
      >
        {snackText}
      </Alert>
    </Snackbar>
  );
};
