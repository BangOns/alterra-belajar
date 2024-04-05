import React from "react";
import Bahan from "./Bahan";
import { useSelector } from "react-redux";

export default function ListBahanBurger() {
  const { ListBahan } = useSelector((state) => state?.burgerIng?.burger);
  return (
    <div className="w-[600px] h-auto mx-auto mt-10 border border-black">
      <div className="w-100 flex justify-center gap-4 flex-wrap p-4">
        {ListBahan?.map((items) => (
          <Bahan items={items} key={items.id} />
        ))}
      </div>
    </div>
  );
}
