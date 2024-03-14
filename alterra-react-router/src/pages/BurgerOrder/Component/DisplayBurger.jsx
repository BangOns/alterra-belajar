import React from "react";

export default function DisplayBurger({ burgerManage = [], Click }) {
  return (
    <div className="max-w-80 h-auto mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
      <div className="w-[100%] h-7 bg-amber-200 rounded-md"></div>
      {burgerManage?.map((items, index) => {
        return (
          <div
            key={index}
            className={`w-[50%] text-center rounded-md cursor-pointer ${items?.color}`}
            onClick={() => Click(items, "remove")}
          >
            {items?.id}
          </div>
        );
      })}
      <div className="w-[100%] h-7 bg-amber-200 rounded-md"></div>
    </div>
  );
}
