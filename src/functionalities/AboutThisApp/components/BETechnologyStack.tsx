import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

export const BETechnologyStack = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Backend: Technology Stack
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Node.js:</Typography>
                <Typography>
                  The runtime environment for running JavaScript on the
                  server-side.
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
                  Enhances JavaScript by adding static types, leading to more
                  reliable and maintainable code.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>Express:</Typography>
                <Typography>
                  A web application framework for Node.js, designed for building
                  web applications and APIs.
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
                  A powerful data query language for APIs, allowing clients to
                  request exactly the data they need.
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
                  MongoDB (Mongoose):
                </Typography>
                <Typography>
                  NoSQL database used for storing user data and code snippets,
                  providing high performance and scalability.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>bcrypt:</Typography>
                <Typography>
                  Provides password hashing functionality, enhancing security.
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
                  body-parser:
                </Typography>
                <Typography>
                  Parses incoming request bodies in a middleware before your
                  handlers.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>cors:</Typography>
                <Typography>
                  Enables Cross-Origin Resource Sharing (CORS) with various
                  options to manage resource access across domains.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>dotenv:</Typography>
                <Typography>
                  Loads environment variables from a `.env` file to keep
                  sensitive data secure and separate from the codebase.
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
                  express-rate-limit:
                </Typography>
                <Typography>
                  Used to limit repeated requests to public APIs and endpoints,
                  such as password resets, to prevent abuse.
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
                  express-validator:
                </Typography>
                <Typography>
                  Middleware that wraps validator.js, a library providing
                  validation and sanitation functions for strings.
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
                  graphql-http:
                </Typography>
                <Typography>
                  Middleware for setting up a GraphQL endpoint, allowing GraphQL
                  queries to interact with the backend.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>helmet:</Typography>
                <Typography>
                  Helps secure apps by setting various HTTP headers, such as
                  HSTS and X-Frame-Options, to protect against vulnerabilities.
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
                  jsonwebtoken:
                </Typography>
                <Typography>
                  Used to issue JSON Web Tokens (JWT) for secure authentication
                  and authorization.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>mongoose:</Typography>
                <Typography>
                  MongoDB object modeling tool designed to work in an
                  asynchronous environment for managing database interactions.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>morgan:</Typography>
                <Typography>
                  HTTP request logger middleware for Node.js, providing logging
                  of requests for better monitoring.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>uuid:</Typography>
                <Typography>
                  For the creation of RFC4122 UUIDs, used to generate unique
                  identifiers for resources.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>validator:</Typography>
                <Typography>
                  A library of string validators and sanitizers for ensuring
                  input correctness and security.
                </Typography>
              </>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>vm2:</Typography>
                <Typography>
                  Provides sandbox capabilities for running untrusted code
                  securely within the backend.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
