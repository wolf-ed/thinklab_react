import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  CustomFormStyled,
  ContainerStyled,
} from '../../components/CustomForm/CustomForm.styles';
import { SignUpUserFormInputsInterface } from './types';
import { useSignUp } from './useSignUp';
import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';
import { ENV_IS_PROD } from '../../envConsts';
import { useSnackbarNotification } from '../SnackbarNotification/useSnackbarNotification';
import useMediaQuery from '@mui/material/useMediaQuery';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const signUp = useSignUp();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const snackbarNotif = useSnackbarNotification();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<SignUpUserFormInputsInterface>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpUserFormInputsInterface> = async (
    userData
  ) => {
    if (!ENV_IS_PROD) {
      await signUp.signUpUser({ ...userData });
      navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR);
    } else {
      snackbarNotif.showSnackbar({
        message: 'Sign in is disabled for privacy policy!',
        duration: 3000,
        severity: 'info',
      });
    }
  };

  const togglePasswordVisibility = (): void => setShowPassword(!showPassword);
  const password: string = watch('password');

  return (
    <ContainerStyled>
      <Paper
        elevation={3}
        sx={{
          padding: isMobile ? '0.5rem' : '2rem',
          width: '600px',
          maxWidth: '95%',
          margin: '2rem auto',
          textAlign: 'center',
          backgroundColor: '#fafafa',
        }}
      >
        <Typography
          color="error"
          sx={{
            maxWidth: '95%',
            margin: 'auto auto 16px',
            width: '50rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Authentication Disabled
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Note: This is a portfolio project for demonstration purposes. As such,
          authentication and the saving of any personal information are
          currently disabled to avoid any potential data privacy concerns.
          <br />
          <br />
          The sign-up functionality is not active, and no user data will be
          collected or stored. If you would like a live demonstration,
          authentication features can be temporarily enabled upon request during
          a live call using local servers.
          <br />
          <br />
          After the demonstration, all authentication functionality will be
          promptly disabled again to ensure no data is at risk.
          <br />
          <br />
          Feel free to explore the project without the risk of your personal
          information being saved or processed in this live version.
        </Typography>
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            margin: 'auto',
            maxWidth: isMobile ? '95%' : '600px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: '1rem' }}
            onClick={() => navigate(ROUTES_ENUM.PRIVACY_POLICY)}
          >
            Privacy Policy
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: '1rem' }}
            onClick={() => navigate(ROUTES_ENUM.HOME)}
          >
            Home
          </Button>
        </Box>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          padding: isMobile ? 0 : '2rem',
          maxWidth: isMobile ? '95%' : '600px',
          margin: '2rem auto',
        }}
      >
        <CustomFormStyled
          onSubmit={handleSubmit((userData) => {
            if (!ENV_IS_PROD) {
              onSubmit(userData);
            }
          })}
        >
          <TextField
            label="Name"
            variant="outlined"
            error={Boolean(errors.name)}
            helperText={errors.name ? 'Name is required' : ''}
            {...register('name', { required: 'Name is required' })}
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ''}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password ? 'Password is required' : ''}
            {...register('password', { required: 'Password is required' })}
            fullWidth
            sx={{ marginBottom: '1rem' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {touchedFields.confirmPassword && (
            <TextField
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              error={Boolean(errors.confirmPassword)}
              helperText={
                errors.confirmPassword ? 'Passwords do not match' : ''
              }
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === password || 'The passwords do not match',
              })}
              fullWidth
              sx={{ marginBottom: '1rem' }}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={ENV_IS_PROD}
            fullWidth
          >
            Sign Up
          </Button>
        </CustomFormStyled>
      </Paper>
    </ContainerStyled>
  );
};
