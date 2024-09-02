import { useNavigate } from 'react-router-dom';
import { ROUTES_ENUM } from '../../navigation/const';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import { ContainerStyled } from './ErrorPage.styles';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerStyled>
      <div>
        <h1>Error</h1>
        <p>Sorry, some error ocurred.</p>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          onClick={() => navigate(ROUTES_ENUM.HOME)}
        >
          Go to Home Page
        </Button>
      </div>
    </ContainerStyled>
  );
};
