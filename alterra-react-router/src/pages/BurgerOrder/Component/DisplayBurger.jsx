import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBurgers } from "../../../libs/redux/Slice/BurgerIngredients.slice";
export default function DisplayBurger() {
  const { order } = useSelector((state) => state?.burgerIng?.burger);
  const dispatch = useDispatch();
  return (
    <div className="max-w-80 h-auto mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
      <div className="w-[100%] h-7 bg-amber-200 rounded-md"></div>
      {order?.map((burger, index) => {
        return (
          <div
            key={index}
            className={`w-[50%] text-center rounded-md cursor-pointer ${burger?.items?.color}`}
            onClick={() => dispatch(removeBurgers(burger))}
          >
            {burger?.items?.id}
          </div>
        );
      })}
      <div className="w-[100%] h-7 bg-amber-200 rounded-md"></div>
    </div>
  );
}
