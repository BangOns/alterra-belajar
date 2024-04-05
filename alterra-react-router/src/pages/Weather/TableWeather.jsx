import React from "react";
import { useSelector } from "react-redux";
export default function TableWeather() {
  const { dataWeather } = useSelector((state) => state?.weather);
  return (
    <div className="container pt-10">
      <table className="table-auto w-full ">
        <thead className="bg-slate-200">
          <tr>
            <th className="text-start">cloud_pct</th>
            <th className="text-start">temp</th>
            <th className="text-start">feels_like</th>
            <th className="text-start">humidity</th>
            <th className="text-start">min_temp</th>
            <th className="text-start">max_temp</th>
            <th className="text-start">wind_speed</th>
            <th className="text-start">wind_degrees</th>
            <th className="text-start">sunrise</th>
            <th className="text-start">sunset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dataWeather.cloud_pct}</td>
            <td>{dataWeather.temp}</td>
            <td>{dataWeather.feels_like}</td>
            <td>{dataWeather.humidity}</td>
            <td>{dataWeather.min_temp}</td>
            <td>{dataWeather.max_temp}</td>
            <td>{dataWeather.wind_speed}</td>
            <td>{dataWeather.wind_degrees}</td>
            <td>{dataWeather.sunrise}</td>
            <td>{dataWeather.sunset}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
