import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function RecipeId() {
  const params = useParams();
  const { recipe } = useSelector((state) => state?.recipe);
  const filteredRecipe = recipe?.find((items) => items.title === params.id);
  const ParseIngredientsRecipe = filteredRecipe.ingredients.split(";");
  return (
    <>
      <Link
        className="text-2xl font-medium bg-sky-400 text-white px-4 py-2 rounded  absolute top-2 left-2"
        to="/recipe"
      >
        Go back
      </Link>
      <div className="container max-w-4xl mx-auto flex justify-center items-center">
        <div className="w-1/2 border mt-10 border-slate-400 rounded p-5">
          <h1 className="text-center my-2 font-medium text-xl">
            Details Recipe
          </h1>
          <div className="Recipe">
            <p className="text-xl">
              Title :{" "}
              <span className="font-medium">{filteredRecipe.title}</span>
            </p>
            <p className="text-xl">Ingredients :</p>
            <ul className="">
              {ParseIngredientsRecipe?.map((items) => (
                <li className="font-medium"> - {items}</li>
              ))}
            </ul>
            <p className="font-medium"></p>
            <p className="text-xl">
              Servings :{" "}
              <span className="font-medium">{filteredRecipe.servings}</span>
            </p>
            <p className="text-xl"> Instructions :</p>
            <ul>
              {filteredRecipe.instructions.split(";")?.map((items) => (
                <li className="font-sm text-sm"> - {items}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
