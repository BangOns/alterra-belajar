import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    displayName: "",
    email: "",
    id: "",
    isActive: false,
  },
};
export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthData } = AuthSlice.actions;
export default AuthSlice.reducer;
