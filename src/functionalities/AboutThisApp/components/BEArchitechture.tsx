import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const BEArchitechture = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Backend: Architecture
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Modular Design:
                </Typography>
                <Typography>
                  Each part of the system is compartmentalized into distinct
                  modules such as middleware, models, and utilities. This
                  separation enhances clarity, simplifies updates, and makes
                  testing more straightforward.
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
                  Centralized Configuration:
                </Typography>
                <Typography>
                  All environment variables are managed centrally through named
                  exports from a single configuration module. This allows for
                  easy changes without impacting other parts of the system,
                  reducing the risk of errors.
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
                  Organized Data Models:
                </Typography>
                <Typography>
                  All data models are grouped in a single directory, ensuring
                  they can be easily managed and are interchangeable without
                  affecting the overall system behavior.
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
                  Functionality Segregation:
                </Typography>
                <Typography>
                  Each functionality is isolated within its own folder, ensuring
                  that different parts of the application only depend on what
                  they need. This promotes loose coupling, making the system
                  more modular and easier to extend or modify.
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
                  Scalable Sandbox Environments:
                </Typography>
                <Typography>
                  Different sandbox environments for code execution are
                  organized into separate folders, supporting scalability and
                  potential distribution across multiple servers. This structure
                  simplifies the integration of additional programming
                  languages.
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
                  Streamlined Routing:
                </Typography>
                <Typography>
                  All routes are consolidated in a single directory, enhancing
                  the clarity of the API’s structure and making it easier to
                  navigate and modify. This organization supports flexible
                  routing logic, allowing the system to evolve without being
                  tightly coupled to specific frameworks or technologies.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
