import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Component/Button/Button";

const ListCTA = [
  {
    link: "/game",
    text: "Play Game",
    variants: "secondary",
  },
  {
    link: "/help",
    text: "Help Me!",
    variants: "primary",
  },
  {
    link: "/about-us",
    text: "About Us",
    variants: "secondary",
  },
];
export default function HomeListCTA() {
  return (
    <div className="w-full h-[calc(100vh-184px)] flex flex-col justify-center items-center gap-3">
      {ListCTA.map((items, i) => (
        <Link to={items.link} key={i} className="w-full max-w-40">
          <Button variant={items.variants}>{items.text}</Button>
        </Link>
      ))}
    </div>
  );
}
