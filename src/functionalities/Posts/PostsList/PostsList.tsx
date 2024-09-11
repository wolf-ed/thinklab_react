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
    getPosts(null);
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
