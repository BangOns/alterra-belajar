import React, { useEffect } from "react";
import ListWeather from "./ListWeather";
import TableWeather from "./TableWeather";
import { useSelector } from "react-redux";
import { useFetch } from "../../Utils/UseFetch";
export default function Weather() {
  const { weather } = useSelector((state) => state.weather);
  const { fetcher, loading } = useFetch();
  useEffect(() => {
    fetcher(weather);
  }, [weather]);
  return (
    <div className="container mx-auto px-14 ">
      <h1 className="pt-14 font-semibold text-4xl">Weather List</h1>
      {loading ? <p>Loading...</p> : null}
      <ListWeather />
      <TableWeather />
    </div>
  );
}
