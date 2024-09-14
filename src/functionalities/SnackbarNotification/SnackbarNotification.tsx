import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// REDUX
import { CustomSnackBar } from '../../components/CustomSnackbar/CustomSnackbar';
import { RootReduxState, AppDispatch } from '../../store';
import { resetSnackbar } from '../../store/snackbarNotification/snackbarNotificationSlice';

export const SnackBarNotification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isVisible, message, duration, position, severity } = useSelector(
    (state: RootReduxState) => state.SnackBarNotification
  );

  const [showSnackbar, setShowSnackbar] = useState(isVisible);

  const handleOnDissmissSnackbar = () => {
    setShowSnackbar(false);
    setTimeout(() => {
      dispatch(resetSnackbar());
    }, duration ?? 2500);
  };

  useEffect(() => {
    if (isVisible) {
      setShowSnackbar(true);
    }
  }, [isVisible]);

  return (
    <CustomSnackBar
      isVisible={showSnackbar}
      message={message}
      duration={duration}
      position={position}
      onDismissSnackBar={handleOnDissmissSnackbar}
      severity={severity}
    />
  );
};
