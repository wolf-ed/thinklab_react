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
import { useLogIn } from './useLogIn';
import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';

export const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { logIn, error } = useLogIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInUserInterface>();

  const onLogIn: SubmitHandler<LogInUserInterface> = async (userData) => {
    await logIn({
      userData: userData,
      onSuccess: () => navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR),
    });
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
      <CustomFormStyled onSubmit={handleSubmit(onLogIn)}>
        <TextField
          label="Email"
          variant="outlined"
          error={!!errors.email || !!loginError}
          helperText={errors.email ? 'This field is required' : ''}
          {...register('email', { required: true })}
          fullWidth
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          error={!!errors.password || !!loginError}
          helperText={errors.password ? 'This field is required' : ''}
          {...register('password', { required: true })}
          fullWidth
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
