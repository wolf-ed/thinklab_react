import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';

export const FESecurity = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Frontend: Security and Best Practices
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Code Quality:
                </Typography>
                <Typography>
                  Adheres to industry standards and best practices, enforced
                  through ESLint configurations tailored to React and
                  TypeScript, ensuring consistent and clean code throughout the
                  project.
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
                  Environment Variables:
                </Typography>
                <Typography>
                  Managed securely, ensuring sensitive data is kept out of the
                  codebase, aligning with best practices for secure front-end
                  development.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Robust Authentication and Authorization
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  OAuth Integration:
                </Typography>
                <Typography>
                  Supports OAuth2.0 integration for robust user authentication,
                  ensuring secure and reliable user authentication processes.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Code Security
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Code Quality and Standards:
                </Typography>
                <Typography>
                  Strict coding standards enforced through ESLint and Prettier
                  ensure that the codebase adheres to industry best practices,
                  enhancing maintainability and reducing security risks.
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
                  Static Code Analysis:
                </Typography>
                <Typography>
                  Integration of tools like SonarQube for continuous inspection
                  of code quality to detect bugs, vulnerabilities, and code
                  smells in both JavaScript and TypeScript files.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Data Security
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Secure Data Handling:
                </Typography>
                <Typography>
                  Utilizes secure methods to handle sensitive data, including
                  encryption of passwords.
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
                  Environment Variables:
                </Typography>
                <Typography>
                  Managed through a secure approach using tools like dotenv for
                  local environments and secure vaults for production, ensuring
                  sensitive data such as API keys and configuration settings are
                  protected.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Secure Headers
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  HTTP Strict Transport Security (HSTS):
                </Typography>
                <Typography>
                  Enforces secure (HTTP over SSL/TLS) connections to the server
                  with helmet, which includes settings for max age, including
                  subdomains, and preload.
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
                  X-Powered-By:
                </Typography>
                <Typography>
                  The <code>X-Powered-By</code> header is removed by helmet to
                  obscure details about the backend stack, making it harder for
                  attackers to exploit specific vulnerabilities.
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
                  Referrer Policy:
                </Typography>
                <Typography>
                  Configured via helmet to control the amount of referrer
                  information sent along with requests, enhancing privacy and
                  security.
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
                  X-Frame-Options:
                </Typography>
                <Typography>
                  Protects against clickjacking attacks by preventing the site
                  content from being embedded into other sites. It can be
                  configured to allow from the same origin or to deny all
                  framing attempts.
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
                  X-XSS-Protection:
                </Typography>
                <Typography>
                  While deprecated in modern browsers as they implement more
                  effective measures against XSS attacks, this header is often
                  included for compatibility with older browsers, providing a
                  layer of protection against cross-site scripting attacks.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        CORS Configuration
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Cross-Origin Resource Sharing (CORS):
                </Typography>
                <Typography>
                  Managed by the <code>cors</code> middleware, which is
                  configured to accept requests from approved origins. This
                  prevents unwanted cross-domain interactions and ensures that
                  only legitimate domains can request resources, protecting
                  against certain types of cross-site request forgery (CSRF)
                  attacks.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Content Security Policy (CSP)
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>CSP:</Typography>
                <Typography>
                  Although not configured in the provided snippet, implementing
                  Content Security Policy (CSP) headers can significantly
                  enhance security by restricting the sources from which content
                  can be loaded. CSP helps mitigate the risk of XSS attacks by
                  specifying valid sources for executable scripts, stylesheets,
                  and other resources.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Rate Limiting
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Request Rate Limiting:
                </Typography>
                <Typography>
                  Utilizes <code>express-rate-limit</code> to prevent abuse and
                  to mitigate denial-of-service attacks by limiting the number
                  of requests a user can make to the API within a certain period
                  of time.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Transport Layer Security
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ fontWeight: 'bold' }}>SSL/TLS:</Typography>
                <Typography>
                  Ensures that data transmitted back and forth between clients
                  and the server is encrypted, which is vital for protecting
                  sensitive information against eavesdropping and
                  man-in-the-middle attacks.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
};
