import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const FETechnologyStack = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Frontend: Technology Stack
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>React:</Typography>
                <Typography>
                  The core library for building the user interface, React is
                  chosen for its component-based architecture, allowing for
                  reusable and modular UI elements.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>TypeScript:</Typography>
                <Typography>
                  Adds static typing to JavaScript, improving code quality, and
                  making the codebase more robust and easier to maintain.
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
                  Redux Toolkit:
                </Typography>
                <Typography>
                  Simplifies state management within the application, paired
                  with Redux Thunk for handling asynchronous actions.
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
                  Apollo Client:
                </Typography>
                <Typography>
                  Manages GraphQL data with ease, offering a robust solution for
                  fetching, caching, and updating application data in response
                  to queries and mutations.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>GraphQL:</Typography>
                <Typography>
                  Used for efficient data querying and manipulation, allowing
                  the frontend to request exactly the data it needs and enabling
                  real-time updates.
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
                  Material-UI (MUI):
                </Typography>
                <Typography>
                  Implements a sleek and modern design using Material-UI
                  components, which offer a wide range of customizable and
                  accessible UI elements.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Emotion:</Typography>
                <Typography>
                  A powerful library for writing CSS styles with JavaScript,
                  used in conjunction with Material-UI for styling components.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Vite:</Typography>
                <Typography>
                  A fast build tool and development server, providing a superior
                  developer experience with instant hot module replacement and
                  efficient production builds.
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
                  React Router:
                </Typography>
                <Typography>
                  Facilitates smooth navigation between different views in the
                  application, allowing for a multi-page experience within a
                  single-page app.
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
                  Formik & Yup:
                </Typography>
                <Typography>
                  Simplify form management and validation, providing a
                  structured way to handle user inputs and ensuring data
                  integrity.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>CodeMirror:</Typography>
                <Typography>
                  An embeddable code editor that supports a variety of
                  programming languages, integrated to enhance the code editing
                  experience directly within the browser.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Jest:</Typography>
                <Typography>
                  A JavaScript testing framework that ensures correctness of the
                  application logic with efficient and comprehensive unit and
                  integration testing capabilities.
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
                  React Testing Library:
                </Typography>
                <Typography>
                  Provides utilities for testing React components, focusing on
                  testing the application’s behavior from a user’s perspective
                  rather than the implementation details.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
