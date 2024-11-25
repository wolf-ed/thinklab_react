import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { PostTile } from '../PostTile/PostTile';
import { useGetPosts } from '../useGetPosts';
import { getAllPosts } from '../../../store/posts/postsSelector';
import { ContainerStyled } from './PostList.styles';
import { LoadingComponent } from '../../../components/LoadingComponent/LoadingComponent';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const { loading, error, getPosts } = useGetPosts();

  useEffect(() => {
    getPosts(null);
  }, []);

  if (loading && !posts) {
    return <LoadingComponent />;
  }

  if (error && !posts) {
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
        <PostTile postItem={postItem} key={postItem.id} />
      ))}
    </ContainerStyled>
  );
};
