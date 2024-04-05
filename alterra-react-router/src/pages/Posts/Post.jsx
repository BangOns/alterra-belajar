import React, { useEffect, useState } from "react";
import axios from "axios";
import ContainerPost from "./ContainerPost";
import { useDispatch } from "react-redux";
import { setFavoritePost, setPostData } from "../../libs/redux/Slice/PostSlice";
import ContainerFavoritePost from "./ContainerFavorite";
export default function PagePost() {
  const dispatch = useDispatch();
  const [favorite, favoriteSet] = useState(false);
  async function GetPost() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_ENDPOINT_POST}/posts?_limit=10`
      );
      dispatch(setPostData(data));
      const filtered = data.filter((items) => {
        return items.id === 2;
      });
      dispatch(setFavoritePost(filtered));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetPost();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold ">
        Post {favorite ? "List" : "Favorite"} Page
      </h1>
      <button
        type="button"
        className=" mt-5 px-4 py-2 rounded bg-slate-500 text-white"
        onClick={() => favoriteSet(!favorite)}
      >
        Get Favorite Post
      </button>
      {favorite ? <ContainerFavoritePost /> : <ContainerPost />}
    </div>
  );
}
