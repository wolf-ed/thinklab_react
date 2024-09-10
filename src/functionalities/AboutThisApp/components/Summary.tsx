import { Typography, Paper } from '@mui/material';

export const Summary = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Summary
      </Typography>
      <Typography variant="h4" paragraph>
        ThinkLab is a comprehensive platform designed to provide users with a
        seamless experience for remote code execution and document management
        across a variety of devices, so they can write about complex topic
        integrating code in the text, which they and the people reading their
        posts can execute.
      </Typography>
      <Typography variant="h5" paragraph>
        Built using modern web technologies like <strong>React</strong>,{' '}
        <strong>TypeScript</strong>,<strong>GraphQL</strong>, and{' '}
        <strong>Node.js</strong>, ThinkLab prioritizes scalability,
        maintainability, and performance, ensuring a smooth and intuitive user
        experience.
      </Typography>
    </Paper>
  );
};
