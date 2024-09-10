import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

// LOCAL
import { getIsAuth } from '../../../../store/user/userSelectors';
import { ROUTES_ENUM } from '../../../const';

const StyledOptionsBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

export const TopRightOptions = () => {
  const isAuth = getIsAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES_ENUM.LOG_IN);
  };

  const handleSignUp = () => {
    navigate(ROUTES_ENUM.SIGN_UP);
  };

  const handlePrivacyPolicy = () => {
    navigate(ROUTES_ENUM.PRIVACY_POLICY);
  };

  if (isAuth) {
    return <StyledOptionsBox>{'User is logged in'}</StyledOptionsBox>;
  }

  return (
    <StyledOptionsBox>
      <Button color="inherit" onClick={handleLogin}>
        Log In
      </Button>
      <Button color="inherit" onClick={handleSignUp} variant="outlined">
        Sign Up
      </Button>
      <Button color="inherit" onClick={handlePrivacyPolicy} variant="outlined">
        Privacy Policy
      </Button>
    </StyledOptionsBox>
  );
};
