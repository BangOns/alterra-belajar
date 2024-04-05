import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import DisplayBurger from "./Component/DisplayBurger";
import ListBahanBurger from "./Component/ListBahan";
import { Link, useLocation } from "react-router-dom";

export default function BurgerOrder() {
  const [doneOrder, doneOrderSet] = useState(false);
  const { search } = useLocation();

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
      <Header />
      <DisplayBurger />
      <ListBahanBurger />
    </div>
  );
}
