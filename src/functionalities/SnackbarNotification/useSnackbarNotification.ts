import { CustomSnackBarProps } from '../../components/CustomSnackbar/CustomSnackbar';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { showSnackbar } from '../../store/snackbarNotification/snackbarNotificationSlice';

export interface UseSnackbarProps
  extends Pick<
    CustomSnackBarProps,
    'message' | 'actionText' | 'position' | 'duration' | 'actionText'
  > {}

export const useSnackbarNotification = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleShowSnackbar = (props: UseSnackbarProps) => {
    dispatch(showSnackbar(props));
  };

  return {
    showSnackbar: handleShowSnackbar,
  };
};
