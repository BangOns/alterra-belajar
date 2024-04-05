import React, { useState } from "react";
import { useFetchRecipe } from "../../../Utils/UseFetchRecipe";
import { useSelector } from "react-redux";

export default function SearchRecipe() {
  const globalState = useSelector((state) => state?.recipe);
  const { fetcher, laoding } = useFetchRecipe();
  const [resep, resepSet] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetcher(resep);
  }
  return (
    <form
      action=""
      className="max-w-lg flex gap-4 items-end"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full border border-black outline-none rounded-md p-2 mt-5"
        onChange={(e) => resepSet(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-slate-400 text-white"
      >
        Search
      </button>
    </form>
  );
}
