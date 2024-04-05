import React, { useEffect } from "react";
import HomeBanner from "./HomeBanner";
import HomeListCTA from "./HomeListCTA";
import { useSelector, useDispatch } from "react-redux";
import { setAuthData } from "../../libs/redux/Slice/AuthSlice";

export default function Home() {
  const global = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAuthData({
        displayName: "Syahroni",
        email: "syahr9940@gmail.com",
        id: "111",
        isActive: false,
      })
    );
  }, []);
  return (
    <>
      <HomeBanner />
      <HomeListCTA />
    </>
  );
}
