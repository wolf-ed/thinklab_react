import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  CustomFormStyled,
  ContainerStyled,
} from '../../components/CustomForm/CustomForm.styles';
import { SignUpUserFormInputsInterface } from './types';
import { useSignUp } from './useSignUp';
import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const signUp = useSignUp();
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
    await signUp.signUpUser({ ...userData });
    navigate(ROUTES_ENUM.TEXT_AND_CODE_EDITOR);
  };

  const togglePasswordVisibility = (): void => setShowPassword(!showPassword);
  const password: string = watch('password');

  return (
    <ContainerStyled>
      <CustomFormStyled onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          variant="outlined"
          error={Boolean(errors.name)}
          helperText={errors.name ? 'This field is required' : ''}
          {...register('name', { required: true })}
          fullWidth
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
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          error={Boolean(errors.password)}
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
        {touchedFields.confirmPassword && (
          <TextField
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword ? 'Passwords do not match' : ''}
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === password || 'The passwords do not match',
            })}
            fullWidth
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </CustomFormStyled>
    </ContainerStyled>
  );
};
