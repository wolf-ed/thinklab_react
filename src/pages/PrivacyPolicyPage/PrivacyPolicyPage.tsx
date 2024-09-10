import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export const PrivacyPolicyPage = () => {
  return (
    <PageWrapper>
      <Box sx={{ padding: '3rem', backgroundColor: '#f5f5f5' }}>
        <Paper
          elevation={3}
          sx={{ padding: '2.5rem', maxWidth: '800px', margin: '0 auto' }}
        >
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{ fontWeight: 'bold' }}
          >
            Privacy Policy
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            paragraph
          >
            <strong>Last updated:</strong> 10/09/2024
          </Typography>

          <Divider sx={{ marginBottom: '2rem' }} />

          <Typography variant="h5" gutterBottom>
            Purpose of this Project
          </Typography>
          <Typography variant="body1" paragraph>
            This portfolio application demonstrates the ability to create and
            execute code within posts using a full-stack setup (React frontend,
            Node backend). The app typically allows users to sign up, log in,
            create posts, and execute code on the backend, returning the result
            to the frontend.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Privacy Considerations
          </Typography>
          <Typography variant="body1" paragraph>
            For privacy and security reasons, the following functionalities have
            been disabled in the deployed version of this application:
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemText>
                <Typography variant="body1">
                  <strong>Sign-up and Log-in:</strong> User authentication
                  functionalities have been disabled to prevent the collection
                  of personal data.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <Typography variant="body1">
                  <strong>Posting and Code Execution:</strong> The ability to
                  create posts and execute code is also disabled to avoid any
                  potential risks related to online code execution.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="body1" paragraph>
            Users can still explore the application's structure, interface, and
            general functionality without any data collection. No personal
            information is stored, processed, or shared in its deployed state.
          </Typography>

          <Divider sx={{ marginBottom: '2rem', marginTop: '2rem' }} />

          <Typography variant="h5" gutterBottom>
            Further Exploration
          </Typography>
          <Typography variant="body1" paragraph>
            If you would like to experience the full functionality of the app,
            including sign-up, log-in, posting, and code execution, you can:
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemText>
                <Typography variant="body1">
                  <strong>Contact me for a demonstration:</strong> I am
                  available for a live demonstration during a call to walk you
                  through the complete features.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText>
                <Typography variant="body1">
                  <strong>Clone or download the repositories:</strong> You may
                  download or clone the Git repositories and run the app locally
                  to explore all functionalities.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

          <Divider sx={{ marginBottom: '2rem', marginTop: '2rem' }} />

          <Typography variant="h5" gutterBottom>
            Data Collection
          </Typography>
          <Typography variant="body1" paragraph>
            No personal information or user data is collected in the deployed
            version of this app, ensuring full protection of your privacy.
          </Typography>

          <Typography variant="body1" paragraph>
            By using this app, you agree to the terms outlined in this privacy
            policy.
          </Typography>
        </Paper>
      </Box>
    </PageWrapper>
  );
};
