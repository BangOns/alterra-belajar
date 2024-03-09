import React from "react";
const variants = {
  primary: "bg-green-400 text-white rounded-md hover:bg-green-300 ",
  secondary:
    "bg-transparent text-green-400 border border-green-400 rounded-md hover:bg-green-300 hover:text-white",
};
const fonts = {
  bold: "font-bold",
  semiBold: "font-semibold",
  normal: "font-normal",
};
export default function Button({
  children,
  variant = "primary",
  font = "normal",
}) {
  return (
    <button
      className={`py-2 px-4 max-w-40  w-full ${fonts[font]}  ${variants[variant]} `}
    >
      {children}
    </button>
  );
}
