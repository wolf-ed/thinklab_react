import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomSnackBarProps } from '../../components/CustomSnackbar/CustomSnackbar';
import { UseSnackbarProps } from '../../functionalities/SnackbarNotification/useSnackbarNotification';

const initialState: CustomSnackBarProps = {
  isVisible: false,
  message: '',
  actionText: '',
  duration: 250,
  position: 'bottom',
  severity: 'info',
};

const snackbarNotificationSlice = createSlice({
  name: 'snackbarNotification',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<UseSnackbarProps>) => {
      state.isVisible = true;
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state) {
          Object.assign(state, { [key]: value });
        }
      });
    },
    setVisibleTrue: (state) => {
      state.isVisible = true;
    },
    setVisibleFalse: (state) => {
      state.isVisible = false;
    },
    resetSnackbar: (state) => {
      Object.entries(initialState).forEach(([key, value]) => {
        if (key in state) {
          Object.assign(state, { [key]: value });
        }
      });
      state = initialState;
    },
  },
});

export const { showSnackbar, setVisibleTrue, setVisibleFalse, resetSnackbar } =
  snackbarNotificationSlice.actions;
export const snackbarNotificationReducer = snackbarNotificationSlice.reducer;
