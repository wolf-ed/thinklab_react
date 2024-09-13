import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { PostTile } from '../PostTile/PostTile';
import { useGetPosts } from '../useGetPosts';
import { getAllPosts } from '../../../store/posts/postsSelector';
import { ContainerStyled } from './PostList.styles';

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
    <ContainerStyled>
      {posts.map((postItem) => (
        <PostTile postItem={postItem} />
      ))}
    </ContainerStyled>
  );
};
