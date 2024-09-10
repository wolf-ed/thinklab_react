import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const BEDevelopmentFeatures = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Backend: Development Features
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
                  Automatically restarts the server after changes, reducing
                  downtime during development and increasing developer
                  productivity.
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
                  Configured to compile TypeScript files on each save,
                  streamlining development by eliminating the need to manually
                  restart the server or recompile the code.
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
                  Streamlined Error Handling:
                </Typography>
                <Typography>
                  Custom middleware is used for catching and formatting errors,
                  enhancing API reliability and maintainability by providing
                  better error reporting and debugging during development.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
