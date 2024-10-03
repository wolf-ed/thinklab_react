import { CircularProgress, Grid } from '@mui/material';

export const LoadingComponent = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <CircularProgress />
    </Grid>
  );
};
