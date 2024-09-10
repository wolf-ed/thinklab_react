import { store } from '..';

export function getAllPosts() {
  const state = store.getState();
  return state.postsReducer.posts;
}

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
  getSelectedPost,
  getPostsLoading,
  getPostsError,
};
