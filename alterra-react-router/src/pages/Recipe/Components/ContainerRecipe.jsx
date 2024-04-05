import React from "react";
import CardRecipe from "./CardRecipe";
import { useSelector } from "react-redux";
export default function ContainerRecipe() {
  const { recipe } = useSelector((state) => state?.recipe);
  console.log(recipe);
  return (
    <div className="mt-6">
      <header>
        <h2 className="font-semibold text-3xl">Best Youre Recipe</h2>
        <hr className="mt-3" />
      </header>
      <article className="grid grid-cols-4 gap-4 mt-5">
        {recipe?.map((items, i) => {
          return <CardRecipe items={items} key={i} />;
        })}
      </article>
    </div>
  );
}
