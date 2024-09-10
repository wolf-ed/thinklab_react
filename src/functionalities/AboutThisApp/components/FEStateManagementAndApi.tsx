import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const FEStateManagementAndApi = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Frontend: State Management and API Logic
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Centralized State Management:
                </Typography>
                <Typography>
                  The state of the application is managed centrally using{' '}
                  <strong>Redux</strong>, providing predictable and consistent
                  state transitions that enhance the application's reliability
                  and maintainability.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Separation and Reusability of Logic:
                </Typography>
                <Typography>
                  API logic and state management are carefully separated and
                  organized to promote reusability and maintainability. This
                  separation ensures that business logic can be maintained
                  independently of UI components, facilitating easier updates
                  and testing.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Performance:
                </Typography>
                <Typography>
                  Leveraging <strong>Vite</strong> for development and builds,
                  the application benefits from faster startup times and
                  efficient hot module replacement, enhancing both the
                  development workflow and the end-user experience.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  User Experience:
                </Typography>
                <Typography>
                  A key focus of the frontend design is providing an intuitive
                  and responsive user experience. This is achieved through the
                  use of modern UI libraries like <strong>Material-UI</strong>{' '}
                  and <strong>Emotion</strong>, along with custom drag-and-drop
                  features and real-time updates.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
