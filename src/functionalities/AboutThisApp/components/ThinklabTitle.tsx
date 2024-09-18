import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ThinklabTitle = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Paper
      elevation={3}
      sx={{ padding: isMobile ? '1rem' : '2rem', marginBottom: '3rem' }}
    >
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        sx={{ fontWeight: 'bold', fontSize: isMobile ? '3rem' : '3rem' }}
      >
        ThinkLab
      </Typography>
      <Typography
        variant="h3"
        paragraph
        align="center"
        color="textSecondary"
        sx={{ fontWeight: 'bold', fontSize: isMobile ? '2rem' : '3rem' }}
      >
        <strong>Author:</strong> Alvaro E. BL
      </Typography>
    </Paper>
  );
};
