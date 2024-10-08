import { useEffect } from 'react';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { useGetPosts } from '../../functionalities/Posts/useGetPosts';
import { PostsEditor } from '../../functionalities/PostsEditor/PostsEditor';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../store/posts/postsSelector';
import { PostInterface } from '../../store/posts/postsSlice';
import { LoadingComponent } from '../../components/LoadingComponent/LoadingComponent';

export const PostsEditorPage = () => {
  const { postId } = useParams<{ postId: string | undefined }>();
  const post: PostInterface | undefined = useSelector(getPostById(postId));
  const { loading, getPosts } = useGetPosts();

  useEffect(() => {
    if (postId && !post) {
      getPosts(postId);
    }
  }, [getPosts, postId]);

  if (postId && loading) {
    return <LoadingComponent />;
  }

  return (
    <PageWrapper>
      {post ? (
        <PostsEditor key={postId} post={post} />
      ) : (
        <PostsEditor key="edit-post" />
      )}
    </PageWrapper>
  );
};
