import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <Fragment>
      <div className=" bg-slate-200 ">
        <div className=" flex justify-between px-12 ">
          <h1>Navbar</h1>
          <div className=" flex justify-between gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/help"}>Help</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
