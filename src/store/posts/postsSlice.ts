import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostInterfaceEncoded as OriginalPostInterface } from '../../functionalities/PostsEditor/types';

export interface PostInterface
  extends Pick<
    OriginalPostInterface,
    'id' | 'title' | 'content' | 'visibility' | 'userName'
  > {}

export interface PostsReducerStateInterface {
  posts: PostInterface[];
  selectedPost: PostInterface | null;
  isLoading: boolean;
  error: string | null;
}

const postsReducerInitialState = {
  posts: [] as PostInterface[],
  selectedPost: null as PostInterface | null,
  isLoading: false,
  error: null as string | null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsReducerInitialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostInterface[]>) => {
      state.posts = action.payload;
    },
    setMorePosts: (state, action: PayloadAction<PostInterface[]>) => {
      const existingIds = new Set(state.posts.map((post) => post.id));
      const newPosts = action.payload.filter(
        (post) => !existingIds.has(post.id)
      );
      state.posts.push(...newPosts);
    },
    selectPost: (state, action: PayloadAction<PostInterface>) => {
      state.selectedPost = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addPost: (state, action: PayloadAction<PostInterface>) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<PostInterface>) => {
      const index = state.posts.findIndex(
        (post: PostInterface) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (post: PostInterface) => post.id !== action.payload
      );
    },
    clearPosts: (state) => {
      state.posts = [];
      state.selectedPost = null;
    },
  },
});

export const {
  setPosts,
  setMorePosts,
  selectPost,
  setLoading,
  setError,
  addPost,
  updatePost,
  deletePost,
  clearPosts,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
