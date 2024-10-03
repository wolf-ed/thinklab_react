import { RootReduxState, store } from '..';

export function getAllPosts() {
  const state = store.getState();
  return state.postsReducer.posts;
}

export const getPostById =
  (postId: string | undefined) => (state: RootReduxState) => {
    if (!postId) return undefined;
    return state.postsReducer.posts.find((post) => post.id === postId);
  };

export function getSelectedPost() {
  const state = store.getState();
  return state.postsReducer.selectedPost;
}

export function getPostsLoading() {
  const state = store.getState();
  return state.postsReducer.isLoading;
}

export function getPostsError() {
  const state = store.getState();
  return state.postsReducer.error;
}

export const postSelectors = {
  getAllPosts,
  getPostById,
  getSelectedPost,
  getPostsLoading,
  getPostsError,
};
