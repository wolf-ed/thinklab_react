import { Snackbar, Button, Alert } from '@mui/material';

// LOCAL
import { App_Colors } from '../../styles/globalStyles';

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
    horizontal: 'left' as 'left',
  };

  const severityStyles = {
    error: {
      backgroundColor: App_Colors.error,
      color: '#fff',
    },
    warning: {
      backgroundColor: App_Colors.warning,
      color: '#fff',
    },
    info: {
      backgroundColor: App_Colors.info,
      color: '#fff',
    },
    success: {
      backgroundColor: App_Colors.success,
      color: '#fff',
    },
  };

  return (
    <Snackbar
      open={isVisible}
      autoHideDuration={duration ?? 2500}
      onClose={onDismissSnackBar}
      anchorOrigin={snackbarPosition}
    >
      <Alert
        variant="filled"
        sx={{ width: '100%', ...severityStyles[severity] }}
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
