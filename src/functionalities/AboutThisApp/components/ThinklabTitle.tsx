import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export const ThinklabTitle = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '3rem' }}>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: 'bold' }}
      >
        About ThinkLab
      </Typography>
      <Typography variant="h3" paragraph align="center" color="textSecondary">
        <strong>Author:</strong> Alvaro E. BL
      </Typography>
    </Paper>
  );
};
