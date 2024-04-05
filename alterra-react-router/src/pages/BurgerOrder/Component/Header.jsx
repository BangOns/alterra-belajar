import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetBurgers } from "../../../libs/redux/Slice/BurgerIngredients.slice";
export default function Header() {
  const navigate = useNavigate();
  const { TotalPrice } = useSelector((state) => state?.burgerIng?.burger);
  const dispatch = useDispatch();
  return (
    <div className="w-100 h-14 flex justify-between items-center">
      <p className="text-2xl">
        Total Order : Rp. {TotalPrice.toLocaleString("id")}
      </p>
      <div className="flex gap-2">
        {!TotalPrice ? (
          <button className=" text-sm  rounded-md px-3 py-2 font-semibold  bg-slate-300 hover:bg-slate-400">
            Order Burger
          </button>
        ) : (
          <>
            <button
              type="button"
              className=" text-sm rounded-md px-3 py-2 font-semibold bg-green-400 hover:bg-green-300"
              onClick={() => navigate(`/burger-order?done=true`)}
            >
              Order
            </button>
            <button
              className=" text-sm  rounded-md px-3 py-2 font-semibold  bg-red-400 hover:bg-red-300"
              onClick={() => dispatch(resetBurgers())}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}
