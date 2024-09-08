import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// LOCAL
import { MainContainer } from './UserAccount.styles';
import { ROUTES_ENUM } from '../../navigation/const';

export const UserAccount = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Typography
        color="error"
        style={{
          marginBottom: 16,
          maxWidth: '90%',
          width: '50rem',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        Note: This is a portfolio project for demonstration purposes. As such,
        the user account functionality, including any personal information
        management, is currently disabled to avoid any potential data privacy
        concerns.
        <br />
        No user data will be collected, stored, or modified in any way while
        using this live version. If you would like a live demonstration of the
        account management features, they can be temporarily enabled upon
        request, but only during a live demonstration on local servers and never
        on any publicly deployed version.
        <br />
        <br />
        After the demonstration, all functionality related to user accounts will
        be promptly disabled again to ensure no data is at risk.
        <br />
        <br />
        Feel free to explore the project and its features as intended. No
        personal information will be saved or processed while using this live
        version.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ width: 'fit-content', margin: 'auto' }}
        onClick={() => navigate(ROUTES_ENUM.HOME)}
      >
        Home Page
      </Button>
    </MainContainer>
  );
};
