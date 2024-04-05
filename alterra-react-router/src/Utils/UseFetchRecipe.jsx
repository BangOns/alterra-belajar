import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getRecipe } from "../libs/redux/Slice/RecipeSlice";

export function useFetchRecipe() {
  const [loading, loadingSet] = useState(false);
  const dispatch = useDispatch();

  async function fetcher(querys) {
    loadingSet(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ENDPOINT_RECIPE}?query=${querys}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      dispatch(getRecipe(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      loadingSet(false);
    }
  }
  return { fetcher, loading };
}
