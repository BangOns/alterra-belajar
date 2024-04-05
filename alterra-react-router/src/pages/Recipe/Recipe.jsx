import React from "react";
import { useDispatch } from "react-redux";
import ContainerRecipe from "./Components/ContainerRecipe";
import SearchRecipe from "./Components/SearchRecipe";
import SearchListRecipe from "./Components/SearchListRecipe";
import { deleteAllRecipe } from "../../libs/redux/Slice/RecipeSlice";
export default function Recipe() {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto flex items-center px-7">
      <div className="container pt-10">
        <h1 className="text-3xl font-semibold ">Search My Recipe</h1>
        <SearchRecipe />
        <button
          className="mt-3 px-3 py-2 bg-slate-500 rounded text-white"
          onClick={() => dispatch(deleteAllRecipe())}
        >
          Clear Recipe
        </button>
        {/* <SearchListRecipe /> */}
        <ContainerRecipe />
      </div>
    </div>
  );
}
