import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  burger: {
    ListBahan: [
      {
        id: "Cheese",
        harga: 5000,
        isi: 0,
        color: "bg-yellow-500",
      },
      {
        id: "Lettuce",
        harga: 1000,
        isi: 0,
        color: "bg-red-200",
      },
      {
        id: "Tomato",
        harga: 2500,
        isi: 0,
        color: "bg-red-500",
      },
      {
        id: "Pickles",
        harga: 2000,
        isi: 0,
        color: "bg-green-200",
      },
      {
        id: "Meat",
        harga: 14000,
        isi: 0,
        color: "bg-red-200",
      },
      {
        id: "Mayo",
        harga: 4000,
        isi: 0,
        color: "bg-slate-200",
      },
      {
        id: "Sauce",
        harga: 4000,
        isi: 0,
        color: "bg-red-100",
      },
    ],
    order: [],
    TotalPrice: 0,
  },
};
export const BurgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    orderBurgers: (state, action) => {
      state.burger.TotalPrice += action.payload.items.harga;
      return void state.burger.order.push(action.payload);
    },
    removeBurgers: (state, action) => {
      const states = state.burger.order.filter(
        (item) => item.id !== action.payload.id
      );
      state.burger.TotalPrice -= action.payload.items.harga;

      return void (state.burger.order = states);
    },
    resetBurgers: (state) => {
      state.burger.order = [];
      state.burger.TotalPrice = 0;
    },
  },
});

export const { orderBurgers, removeBurgers, resetBurgers } =
  BurgerSlice.actions;
export default BurgerSlice.reducer;
