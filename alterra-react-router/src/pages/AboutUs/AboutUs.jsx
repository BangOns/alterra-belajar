import React from "react";
import MyProfil from "../../assets/myProfil.png";
import Button from "../../Component/Button/Button";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div className="container mx-auto h-screen  flex justify-center items-center flex-col ">
      <header>
        <h1 className="text-3xl font-bold text-center">About Us</h1>
      </header>
      <section className="mt-5 max-w-3xl w-full ">
        <img
          src={MyProfil}
          alt=""
          className="rounded-full shadow-lg w-40 h-40 mx-auto"
        />
        <p className="text-center py-5 text-2xl">
          I am an Informatics Engineering student who has an interest in the
          front-end developer field. I already have experience in working on
          several projects using technologies such as HTML, CSS, and JavaScript.
          I am also ready to work in a team and have good communication skills
          to work same as other team members. I believe that the ability and
          experience that I have can be a positive contribution to the project
          and the company in the future.
        </p>
      </section>
      <Link to={"/"}>
        <Button variant="primary" font="bold">
          Back To Home
        </Button>
      </Link>
    </div>
  );
}
