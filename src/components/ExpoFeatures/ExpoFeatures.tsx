import React from "react";
import "./ExpoFeatures.css";

const ExpoFeatures = () => {
  return (
    <div className="container">
      <h1 className="text-center">
        <b>Tech Expo</b> Featuring
      </h1>
      <div className="d-sm-flex justify-content-around align-items-center">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/tech-expo/barc.png"}
          alt=""
          width="300"
          className="feat-imgs"
        />
        <div className="d-sm-flex flex-column justify-content-end m-5 fs-1 fw-bold expo-titles">
          <span>BHABHA</span>
          <span>ATOMIC</span>
          <span>RESEARCH</span>
          <span>CENTER</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          Dr. Homi Jehangir Bhabha founded the Bhabha Atomic Research Centre,
          emphasising self-reliance in all fields of nuclear science and
          engineering. BARC is India's leading research and application centre
          for nuclear science. It has put a quality exploration into the
          sub-atomic levels, paving the way for the benefits of the country's
          need for an efficient energy supply.
        </p>
      </div>
      <div className="d-sm-flex justify-content-around align-items-center flex-row-reverse">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/tech-expo/drdo.png"}
          alt=""
          width="300"
          className="feat-imgs"
        />
        <div className="d-sm-flex flex-column justify-content-end m-5 fs-1 fw-bold expo-titles">
          <span>DEFENCE</span>
          <span>RESEARCH &</span>
          <span>DEVELOPMENT</span>
          <span>ORGANISATION</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          The Defence Research and Development Organisation (DRDO) is the
          premier agency within the Ministry of Defence of the Government of
          India, charged with military research and development. DRDO's goal is
          to keep our frontiers safe at all costs. DRDO has a long history of
          demonstrating strength and durability. Its division, NMRL, provides
          scientific solutions to Indian Navy defence technologies.
        </p>
      </div>
      <div className="d-sm-flex justify-content-around align-items-center">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/tech-expo/hal.png"}
          alt=""
          width="300"
          className="feat-imgs"
        />
        <div className="d-sm-flex flex-column justify-content-end m-5 fs-1 fw-bold expo-titles">
          <span>HINDUSTAN</span>
          <span>AERONAUTICS</span>
          <span>LIMITED</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          Hindustan Aeronautics Limited (HAL) is a Bengaluru-based Indian
          state-owned aerospace and defence company. HAL has designed and
          developed several platforms over the years, including the HF-24 Marut,
          the Dhruv, the LUH, and the LCH. It is currently involved in the
          design and production of fighter jets, marine gas turbine engines,
          avionics overhauling, and even the upgrade of Indian military
          aircraft.One of the largest aerospace companies in Asia, HAL has
          annual turnover of over US$2 billion. International contracts to
          manufacture aircraft engines, spare parts, and other aircraft
          materials account for more than 40% of HAL's revenue.
        </p>
      </div>
    </div>
  );
};

export default ExpoFeatures;
