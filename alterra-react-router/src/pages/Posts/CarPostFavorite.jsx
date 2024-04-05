import React from "react";

export default function CardPostFavorite({ items }) {
  return (
    <div className="max-w-sm p-2 border rounded">
      <h3 className="text-2xl font-medium">{items.title}</h3>
      <p className="text-xl">{items.body}</p>
      <p className="tex">{items.id}</p>
    </div>
  );
}
