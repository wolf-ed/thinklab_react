import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { PostTile } from '../PostTile/PostTile';
import { useGetPosts } from '../useGetPosts';
import { getAllPosts } from '../../../store/posts/postsSelector';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const { loading, error, getPosts } = useGetPosts();

  useEffect(() => {
    // Function to log the current time in hh:mm format
    const logCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      console.log(`getPosts called at: ${hours}:${minutes}`);
    };

    // Initial call to getPosts and log time
    getPosts(null);
    logCurrentTime();

    // Set interval to call getPosts and log time every 10 minutes (600,000 milliseconds)
    const intervalId = setInterval(() => {
      getPosts(null);
      logCurrentTime();
    }, 600000); // 10 minutes

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
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
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" textAlign="center">
        Error loading posts: {error.message}
      </Typography>
    );
  }

  if (posts.length === 0) {
    return (
      <Typography variant="body1" textAlign="center">
        No posts found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {posts.map((postItem) => (
        <Grid item xs={12} sm={6} md={4} key={postItem.id}>
          <PostTile postItem={postItem} />
        </Grid>
      ))}
    </Grid>
  );
};
