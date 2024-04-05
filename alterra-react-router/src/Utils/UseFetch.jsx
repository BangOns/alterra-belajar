import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getDataWeather } from "../libs/redux/Slice/WeatherSlice";

export function useFetch() {
  const [loading, loadingSet] = useState(false);
  const dispatch = useDispatch();

  async function fetcher(citys) {
    loadingSet(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ENDPOINT_WEATHER}?city=${
          citys ? citys : "Jakarta"
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      dispatch(getDataWeather(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      loadingSet(false);
    }
  }
  return { fetcher, loading };
}
