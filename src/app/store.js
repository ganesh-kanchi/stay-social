import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth";
import postsSlice from "features/post";
import userSlice from "features/user";

export default configureStore({
  reducer: {
    auth: authReducer,
    post: postsSlice,
    user: userSlice,
  },
});
