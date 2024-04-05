import React from "react";
import { useSelector } from "react-redux";
import CardPostFavorite from "./CarPostFavorite";
export default function ContainerFavoritePost() {
  const { PostFavoritePost } = useSelector((state) => state?.post);
  return (
    <div>
      <div className=" mt-10 grid grid-cols-5 gap-5">
        {PostFavoritePost?.map((items, i) => {
          return <CardPostFavorite key={i} items={items} />;
        })}
      </div>
    </div>
  );
}
