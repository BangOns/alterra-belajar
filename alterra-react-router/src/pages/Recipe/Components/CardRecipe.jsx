import React from "react";
import { Link } from "react-router-dom";

export default function CardRecipe({ items }) {
  return (
    <section className="max-w-sm  border border-slate-300 rounded-lg pt-4 pb-2 px-2">
      <h3 className="text-xl text-center">{items.title}</h3>
      <p className="text-sm text-center mb-3">{items.servings}</p>
      <Link
        to={`/recipe/${items.title}`}
        className=" px-4 py-1 rounded-md float-end bg-lime-500"
      >
        View Details
      </Link>
    </section>
  );
}
