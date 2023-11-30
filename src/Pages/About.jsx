import React from "react";
import Nav from "../Components/Nav";
import abtImg1 from "../Assets/about1.avif";
import abtImg2 from "../Assets/about2.avif";

function About() {
  return (
    <>
      <section className="aboutPage">
        <Nav />

        <div className="container">
          <div className="row">
            <div className="col-5 mt-5">
              <img
                alt=""
                src={abtImg2}
                width="350"
                height="300"
                className="mt-5 ms-5"
                style={{ outline: "10px white solid" }}
              />
            </div>

            <div className="col-1"></div>

            <div className="col-5 mt-5">
              <h1>OUR VISION</h1>
              <p className="mt-5">
                Our Vision is to Discover and learn more things which leads one
                to gain new experiences and discoveries.By writing down your
                experience, you will get to understand your surroundings better,
                reflect and remember the discoveries that you have made during
                the trip.the journey of your trip using a diary software helps
                you to remember the activities and things that you have done
                during the trip. When recording your travel experience, a travel
                journal can also remind you of the reasons and purpose of the
                travel.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-5 mt-5">
              <h1>ABOUT TRAVEL DIARY</h1>
              <p className="mt-5">
                Travel Diary help you to write and document about the experience
                you had during your trips. You can include the written
                description of the place that you have visited, list down your
                itinerary, the photos that you took during your trip and even
                voice recordings that you have made during your time. Travel
                Diary is one of the most popular journal amongst the different
                types of journals.The daily practice of keeping a travel journal
                helps to organize your thoughts and collect your impressions of
                a place and the things you wish to remember—the destinations,
                hotels, restaurants, and people.
              </p>
            </div>

            <div className="col-1"></div>

            <div className="col-5 mt-5">
              <img
                alt=""
                src={abtImg1}
                width="350"
                height="300"
                className="mt-5"
                style={{ outline: "10px white solid" }}
              />{" "}
            </div>
          </div>
        </div>

        {/* footer */}

        <div class="footer text-center pb-1" style={{ color: "grey" }}>
          <p>
            <i
              class="fa-solid fa-plane fa-beat me-2"
              style={{ color: "#92959b" }}
            ></i>{" "}
            All rights reg & reserved © 2023 Nanda Kumar V
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
