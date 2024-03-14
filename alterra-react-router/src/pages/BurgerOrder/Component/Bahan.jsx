import React from "react";

export default function Bahan({ isMax, items, Click }) {
  console.log(isMax);
  return (
    <button
      disabled={isMax}
      className={`w-28 px-3 py-1 rounded-md text-lg text-center cursor-pointer  bg-amber-400 text-black shadow-md hover:bg-amber-300 disabled:cursor-not-allowed disabled:hover:bg-amber-400 `}
      key={items.id}
      onClick={() => {
        Click(items, "add");
      }}
    >
      <p>{items.id}</p>
      <p>Rp {items.harga}</p>
    </button>
  );
}
