import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// LOCAL
import { LogInUserInterface } from './types';
import {
  CustomFormStyled,
  ContainerStyled,
} from '../../components/CustomForm/CustomForm.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';

export const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError] = useState('');
  // Commented out since the logIn functionality is disabled
  // const { logIn, error } = useLogIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInUserInterface>();

  const onLogIn: SubmitHandler<LogInUserInterface> = async () => {
    // Commented out since authentication is disabled
    navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR);
    // await logIn({
    //   userData: userData,
    //   onSuccess: () => navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR),
    // });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Commented out since error handling for login is not needed if logIn is disabled
  // useEffect(() => {
  //   if (error && error.graphQLErrors) {
  //     const message = error.graphQLErrors
  //       .map((error) => error.message)
  //       .join(', ');
  //     setLoginError(message);
  //   } else {
  //     setLoginError('');
  //   }
  // }, [error]);

  return (
    <ContainerStyled>
      {/* Notification about disabled authentication */}
      <Typography
        color="error"
        style={{
          marginBottom: 16,
          maxWidth: '90%',
          width: '50rem',
          textAlign: 'center',
        }}
      >
        Note: This is a portfolio project for demonstration purposes. As such,
        authentication and the saving of any personal information are currently
        disabled to avoid any potential data privacy concerns.
        <br />
        The sign-in functionality is not active, and no user data will be
        collected or stored. If you would like a live demonstration, the
        authentication features can be temporarily enabled upon request, but
        only during a live demonstration on local servers and never on any
        publicly deployed version.
        <br />
        <br />
        After the demonstration, all functionality related to authentication
        will be promptly disabled again to ensure no data is at risk.
        <br />
        <br />
        Besides that, feel free to explore the project and its features as
        intended. No personal information will be saved or processed while using
        this live version.
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR);
        }}
      >
        Home Page
      </Button>
      <CustomFormStyled onSubmit={handleSubmit(onLogIn)}>
        <TextField
          label="Email"
          variant="outlined"
          error={!!errors.email || !!loginError}
          helperText={errors.email ? 'This field is required' : ''}
          {...register('email', { required: true })}
          fullWidth
          disabled={true}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          error={!!errors.password || !!loginError}
          helperText={errors.password ? 'This field is required' : ''}
          {...register('password', { required: true })}
          fullWidth
          disabled={true}
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
          <Typography color="error" style={{ marginTop: 8 }}>
            {loginError}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </CustomFormStyled>
    </ContainerStyled>
  );
};
