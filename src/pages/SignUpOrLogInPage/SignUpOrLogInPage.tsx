import { useNavigate } from 'react-router-dom';

// LOCAL
import { ROUTES_ENUM } from '../../navigation/const';
import { ContainerStyled } from '../../navigation/RootLayout/RootLayout';
import { Button } from '@mui/material';

import {
  ContainerStyled as FormPageContainer,
  CustomFormStyled,
} from '../../components/CustomForm/CustomForm.styles';

export const SignUpOrLogInPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerStyled>
      <FormPageContainer>
        <CustomFormStyled>
          <Button
            sx={{ width: '100%' }}
            variant="contained"
            onClick={() => navigate(ROUTES_ENUM.SIGN_UP)}
          >
            Sign Up
          </Button>
          <Button
            sx={{ width: '100%' }}
            variant="contained"
            onClick={() => navigate(ROUTES_ENUM.LOG_IN)}
          >
            Log In
          </Button>
        </CustomFormStyled>
      </FormPageContainer>
    </ContainerStyled>
  );
};
