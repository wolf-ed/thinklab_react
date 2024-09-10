import { Snackbar, Button } from '@mui/material';

export interface CustomSnackBarProps {
  isVisible: boolean;
  onDismissSnackBar?: () => void;
  message: string;
  actionText?: string;
  action?: () => void;
  duration?: number;
  position?: 'top' | 'bottom';
}

export const CustomSnackBar = ({
  isVisible,
  message: snackText,
  action,
  position = 'bottom',
  duration,
  actionText = '',
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
      message={snackText}
      anchorOrigin={snackbarPosition}
      action={
        actionText && (
          <Button color="secondary" size="small" onClick={action}>
            {actionText}
          </Button>
        )
      }
    />
  );
};
