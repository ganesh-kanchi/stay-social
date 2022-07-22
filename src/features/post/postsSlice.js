import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostsRequest,
  getSinglePostRequest,
  createPostRequest,
  editPostRequest,
  deletePostRequest,
  likePostRequest,
  dislikePostRequest,
  addCommentRequest,
  editCommentRequest,
  deleteCommentRequest,
} from "requests";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await getAllPostsRequest();

      if (status === 200) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data, status } = await getSinglePostRequest(postId);

      if (status === 200) {
        return data.post;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await createPostRequest(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await editPostRequest(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (arg, { rejectWithValue }) => {
    const { _id, token } = arg;

    try {
      const { data, status } = await deletePostRequest({ _id, token });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await likePostRequest({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await dislikePostRequest({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await addCommentRequest(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const editComment = createAsyncThunk(
  "posts/editComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await editCommentRequest(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await deleteCommentRequest(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    singlePost: null,
    activeSort: "Latest",

    error: "",
  },
  reducers: {
    resetSinglePost: (state) => {
      state.singlePost = null;
    },

    setActiveSort: (state, { payload }) => {
      state.activeSort = payload;
    },
  },

  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.singlePost = payload;
    },
    [getSinglePost.rejected]: (state) => {
    },

    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const { resetSinglePost, setActiveSort } =
  postsSlice.actions;
export default postsSlice.reducer;
