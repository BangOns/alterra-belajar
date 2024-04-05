import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipe: [],
};

const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    getRecipe(state, action) {
      state.recipe = action.payload;
    },
    deleteAllRecipe(state) {
      state.recipe = [];
    },
  },
});

export const { getRecipe, deleteAllRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
