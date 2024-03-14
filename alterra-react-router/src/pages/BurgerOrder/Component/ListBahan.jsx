import React from "react";
import Bahan from "./Bahan";

export default function ListBahanBurger({ isMax, List, Click }) {
  return (
    <div className="w-[600px] h-auto mx-auto mt-10 border border-black">
      <div className="w-100 flex justify-center gap-4 flex-wrap p-4">
        {List?.map((items) => (
          <Bahan isMax={isMax} items={items} Click={Click} key={items.id} />
        ))}
      </div>
    </div>
  );
}
