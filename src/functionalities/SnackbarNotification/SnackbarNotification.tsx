import { CustomSnackBar } from '../../components/CustomSnackbar/CustomSnackbar';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootReduxState, AppDispatch } from '../../store';
import { resetSnackbar } from '../../store/snackbarNotification/snackbarNotificationSlice';

export const SnackBarNotification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isVisible, message, duration, position } = useSelector(
    (state: RootReduxState) => state.SnackBarNotification
  );

  const handleOnDissmissSnackbar = () => {
    dispatch(resetSnackbar());
  };

  return (
    <>
      <CustomSnackBar
        isVisible={isVisible}
        message={message}
        duration={duration}
        position={position}
        onDismissSnackBar={handleOnDissmissSnackbar}
      />
    </>
  );
};
