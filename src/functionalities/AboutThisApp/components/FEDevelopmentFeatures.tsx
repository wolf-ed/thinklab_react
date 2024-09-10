import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const FEDevelopmentFeatures = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Frontend: Development Features
      </Typography>

      {/* Efficient Development Workflow */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Efficient Development Workflow
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Live Reloading:
                </Typography>
                <Typography>
                  Leverages <strong>Vite</strong> for hot module replacement,
                  automatically refreshing modules in the browser as changes are
                  made to the code, significantly reducing downtime during
                  development.
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
                  Automatic TypeScript Compilation:
                </Typography>
                <Typography>
                  Configured with <strong>Vite</strong> to automatically
                  recompile TypeScript files upon saving, streamlining
                  development by eliminating the need to manually restart the
                  server or recompile the code.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      {/* Advanced Code Quality */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Advanced Code Quality
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>TypeScript:</Typography>
                <Typography>
                  Utilizes <strong>TypeScript</strong> across the application to
                  provide static type checking. This not only catches errors
                  more efficiently but also improves the maintainability and
                  robustness of the code, making the application more reliable
                  and easier to refactor.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      {/* Modular Design and Sandbox Environment */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Modular Design and Sandbox Environment
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Functionality Segregation:
                </Typography>
                <Typography>
                  The codebase is structured into distinct modules and features,
                  allowing multiple developers to work on different features
                  simultaneously without conflict. This modular approach helps
                  in managing complexities, especially as the application
                  scales.
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
                  Interchangeable Sandboxes:
                </Typography>
                <Typography>
                  Development environments for different parts of the
                  application are isolated in sandboxes. This allows developers
                  to test changes and features independently before integration,
                  ensuring that each part of the application can be developed,
                  tested, and debugged in isolation.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      {/* Testing */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Testing
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Jest and React Testing Library:
                </Typography>
                <Typography>
                  Integrated into the development process to support unit and
                  component testing, ensuring that each component behaves as
                  expected. This setup helps maintain code quality and stability
                  through automated testing frameworks.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      {/* Security and Configuration */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Security and Configuration
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Environment Variables:
                </Typography>
                <Typography>
                  Utilizes a robust system for managing environment variables,
                  ensuring that all sensitive configuration details are kept out
                  of the codebase. This practice not only secures sensitive data
                  but also facilitates different configurations for development,
                  testing, and production environments seamlessly.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
