import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

// LOCAL
import { LogInUserInterface } from './types';
import {
  CustomFormStyled,
  ContainerStyled,
} from '../../components/CustomForm/CustomForm.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';
import { useLogIn } from './useLogIn';
import { ENV_IS_PROD } from '../../envConsts';
import { useSnackbarNotification } from '../SnackbarNotification/useSnackbarNotification';

export const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { logIn, error } = useLogIn();
  const snackbarNotif = useSnackbarNotification();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInUserInterface>();

  const onLogIn: SubmitHandler<LogInUserInterface> = async (userData) => {
    if (!ENV_IS_PROD) {
      await logIn({
        userData: userData,
        onSuccess: () => navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR),
      });
    } else {
      snackbarNotif.showSnackbar({
        message: 'Log in is disabled for privacy policy!',
        duration: 3000,
        severity: 'info',
      });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (error && error.graphQLErrors) {
      const message = error.graphQLErrors
        .map((error) => error.message)
        .join(', ');
      setLoginError(message);
    } else {
      setLoginError('');
    }
  }, [error]);

  return (
    <ContainerStyled>
      <Paper
        elevation={3}
        sx={{
          padding: isMobile ? '0.5rem' : '2rem',
          maxWidth: '600px',
          margin: '2rem auto',
          textAlign: 'center',
          backgroundColor: '#fafafa',
        }}
      >
        <Typography
          variant="h6"
          color="error"
          sx={{ marginBottom: '1rem', fontWeight: 'bold' }}
        >
          Authentication Disabled
        </Typography>
        <Typography variant="body1" color="textSecondary">
          This is a portfolio project for demonstration purposes. Authentication
          and the saving of personal information are disabled to avoid any
          potential data privacy concerns.
          <br />
          <br />
          If you would like a live demonstration, authentication can be
          temporarily enabled upon request during a live call using local
          servers. No user data will be collected or stored in the publicly
          deployed version.
          <br />
          <br />
          After the demonstration, all authentication-related functionality will
          be disabled again to ensure data security. Please feel free to explore
          the rest of the project’s features.
        </Typography>
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
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
        <CustomFormStyled onSubmit={handleSubmit(onLogIn)}>
          <TextField
            label="Email"
            variant="outlined"
            error={!!errors.email || !!loginError}
            helperText={errors.email ? 'This field is required' : ''}
            {...register('email', { required: true })}
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            error={!!errors.password || !!loginError}
            helperText={errors.password ? 'This field is required' : ''}
            {...register('password', { required: true })}
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
          {loginError && (
            <Typography color="error" sx={{ marginTop: '8px' }}>
              {loginError}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={ENV_IS_PROD}
            sx={{ marginTop: '1rem' }}
          >
            Log In
          </Button>
        </CustomFormStyled>
      </Paper>
    </ContainerStyled>
  );
};
