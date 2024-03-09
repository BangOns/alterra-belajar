import React from "react";

export default function Computer({ value }) {
  return (
    <div className="computer">
      <p className="w-16 h-16 rounded-full shadow bg-slate-300 items-center flex justify-center">
        {value === "Batu"
          ? "✊"
          : value === "Gunting"
          ? "✌"
          : value === "Kertas"
          ? "✋"
          : "✋"}
      </p>
    </div>
  );
}
