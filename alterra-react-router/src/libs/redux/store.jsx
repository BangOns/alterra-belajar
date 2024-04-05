import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slice/AuthSlice";
import BurgerIngredientsSlice from "./Slice/BurgerIngredients.slice";
import PostSlice from "./Slice/PostSlice";
import WeatherSlice from "./Slice/WeatherSlice";
import RecipeSlice from "./Slice/RecipeSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["recipe"],
};
const userReducer = combineReducers({
  post: PostSlice,
  auth: AuthSlice,
  burgerIng: BurgerIngredientsSlice,
  weather: WeatherSlice,
  recipe: RecipeSlice,
});
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
