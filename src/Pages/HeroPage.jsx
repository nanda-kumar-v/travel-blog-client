import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function HeroPage() {
  return (
    <>
      <section className="heropage">
        <Nav />
        <h1 className="mt-5 p-2">
          You travel the whole world
          <br />
          Travel Diary keeps track of your adventures
        </h1>
        <h2 className="pb-5">
          A Travel Diary That Tracks Your Footsteps Into Every City You Can
          Think Of . Never Forget <br />
          Your Wonderful Experiences And Show Your Friends How You Have Wandered
          The World .
        </h2>
        <div className="herobtn d-flex mt-5">
          <Link
            to="/userlogin"
            style={{
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              backgroundColor: "rgb(179, 120, 239)",
            }}
            className="btn btn-outline-primary mt-5 text-light fw-bold fs-5"
          >
            Click Here To Feature Your Blog
          </Link>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default HeroPage;
