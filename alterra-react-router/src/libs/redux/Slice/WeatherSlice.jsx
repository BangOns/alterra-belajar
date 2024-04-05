import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: "",
  dataWeather: {},
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, action) => {
      state.weather = action.payload;
    },
    getDataWeather: (state, action) => {
      state.dataWeather = action.payload;
    },
  },
});

export const { getWeather, getDataWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
