import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const FEArchitechture = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Frontend: Architecture
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Scalability and Maintainability:
                </Typography>
                <Typography>
                  The frontend architecture is designed with scalability in
                  mind, allowing new features and components to be added with
                  minimal disruption to the existing codebase. The use of{' '}
                  <strong>TypeScript</strong> ensures that as the application
                  grows, the code remains type-safe and easier to debug.
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
                  Component-Based Architecture:
                </Typography>
                <Typography>
                  The application is built using a component-based approach,
                  making it easier to manage and reuse code across the
                  application. Each component is self-contained, promoting
                  cleaner code and reducing the potential for bugs.
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
                  State Management:
                </Typography>
                <Typography>
                  The state of the application is centrally managed using{' '}
                  <strong>Redux</strong>, ensuring predictable state changes and
                  improving the overall reliability of the application.
                </Typography>
              </>
            }
          />
        </ListItem>

        {/* New Routing and Navigation Section */}
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Centralized Routing:
                </Typography>
                <Typography>
                  A clear and centralized routing structure is implemented,
                  simplifying navigation management and enhancing scalability
                  and maintainability. This approach maintains clarity
                  throughout the application's navigation logic, allowing for
                  easy modifications and growth.
                </Typography>
              </>
            }
          />
        </ListItem>

        {/* New State Management and API Logic Section */}
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
      </List>
    </Paper>
  );
};
