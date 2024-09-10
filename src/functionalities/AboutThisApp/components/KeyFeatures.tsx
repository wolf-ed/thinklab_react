import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const KeyFeatures = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Key Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Manage Text and Code like nowhere else:
                </Typography>
                <Typography>
                  Allows users to edit text and code in a rich way, with
                  features to easily move, save, and share content.
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
                  Real-time Code Execution:
                </Typography>
                <Typography>
                  Integrated with the backend to allow users to write, edit,
                  execute, and share code in real-time from any connected
                  device.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Edit Text:</Typography>
                <Typography>
                  A rich text editor that supports comprehensive formatting
                  options for text-based content.
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
                  Edit Code Environment:
                </Typography>
                <Typography>
                  Customize the code editor environment with popular themes like
                  VS Code Dark, Dracula, and others, for a personalized coding
                  experience.
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
                  Drag-and-Drop Interface:
                </Typography>
                <Typography>
                  Utilizes drag-and-drop functionality for intuitive and
                  flexible management of text and code documents.
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
                  Responsive Design:
                </Typography>
                <Typography>
                  The UI is fully responsive, ensuring a smooth experience
                  across different devices and screen sizes, whether on mobile,
                  tablet, or desktop.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
