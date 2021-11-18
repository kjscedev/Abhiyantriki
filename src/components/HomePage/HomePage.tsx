import React from "react";
import SpaceButton from "../Buttons/SpaceButton";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-resp">
      <img
        alt="Abhiyantriki 2021"
        src={
          window.innerWidth > 768
            ? process.env.PUBLIC_URL + "/assets/gifs/home_page.gif"
            : process.env.PUBLIC_URL + "/assets/gifs/home_page_mobile.gif"
        }
        style={{ width: "100%" }}
        className="homepage"
      />
      <div
        className="position-absolute"
        style={{ zIndex: 100, marginTop: "50vh" }}
      >
        <SpaceButton href={process.env.PUBLIC_URL + "/live"} text="View Live" />
      </div>
    </div>
  );
};

export default HomePage;
