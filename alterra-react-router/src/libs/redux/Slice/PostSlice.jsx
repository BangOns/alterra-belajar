import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  PostState: [],
  PostFavoritePost: [],
};
export const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setPostData: (state, action) => {
      state.PostState = action.payload;
    },
    setFavoritePost: (state, action) => {
      state.PostFavoritePost = action.payload;
    },
  },
});
export const { setPostData, setFavoritePost } = PostSlice.actions;
export default PostSlice.reducer;
