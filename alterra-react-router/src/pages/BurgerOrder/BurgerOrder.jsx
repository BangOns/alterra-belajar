import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import DisplayBurger from "./Component/DisplayBurger";
import ListBahanBurger from "./Component/ListBahan";
import { Link, useLocation } from "react-router-dom";

const ListBahan = [
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
];

export default function BurgerOrder() {
  const [orderBahan, orderBahanSet] = useState([]);
  const [totalPrice, totalPriceSet] = useState(0);
  const [max, maxSet] = useState(false);
  const [doneOrder, doneOrderSet] = useState(false);
  const { search } = useLocation();
  function handleClick(items, type) {
    if (type === "add") {
      totalPriceSet((prev) => (prev += items.harga));
      orderBahanSet((prev) => [...prev, { ...items }]);
    } else if (type === "remove") {
      totalPriceSet((prev) => prev - items.harga);
      orderBahanSet((prev) => prev.filter((item) => item !== items));
    }
  }
  function Reset() {
    orderBahanSet([]);
    totalPriceSet(0);
  }
  useEffect(() => {
    if (orderBahan.length >= 9) {
      maxSet(true);
    } else {
      maxSet(false);
    }
  }, [orderBahan]);

  useEffect(() => {
    if (new URLSearchParams(search).get("done") === "true") {
      doneOrderSet(true);
    } else {
      doneOrderSet(false);
    }
  }, [search]);
  if (doneOrder) {
    return (
      <>
        <p>Yeah You Order Recived</p>
        <Link to={"/burger-order"}>Back To Home</Link>
      </>
    );
  }
  return (
    <div className="container mx-auto mt-10">
      <Header price={totalPrice} Click={Reset} />
      <DisplayBurger burgerManage={orderBahan} Click={handleClick} />
      <ListBahanBurger isMax={max} List={ListBahan} Click={handleClick} />
    </div>
  );
}
