import React from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../libs/redux/Slice/WeatherSlice";
export default function ListWeather() {
  const dispatch = useDispatch();
  const ListWeather = ["Jakarta", "Depok", "Bogor", "Bekasi", "Tangerang"];
  return (
    <div className="w-full pt-5">
      <ul className="flex gap-5">
        {ListWeather?.map((items, i) => {
          return (
            <li key={i}>
              <button
                className="px-4 py-2 text-white bg-slate-500 hover:bg-slate-400 rounded"
                onClick={() => dispatch(getWeather(items))}
              >
                {items}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
