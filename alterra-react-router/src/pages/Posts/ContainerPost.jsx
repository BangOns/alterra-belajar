import React from "react";
import CardPost from "./CardPost";
import { useSelector } from "react-redux";
export default function ContainerPost() {
  const { PostState } = useSelector((state) => state?.post);
  return (
    <div>
      <div className=" mt-10 grid grid-cols-5 gap-5">
        {PostState?.map((items, i) => {
          return <CardPost key={i} items={items} />;
        })}
      </div>
    </div>
  );
}
