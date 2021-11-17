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
          <span>INDIAN</span>
          <span>AIR</span>
          <span>FORCE</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          dolore. Molestias quia doloremque facilis recusandae provident! Eaque,
          dolore magnam amet rem minus ullam praesentium repudiandae tempore
          voluptas sed sunt, reprehenderit, earum exercitationem illo.
          Laudantium voluptas similique quis, eligendi nulla ea recusandae
          adipisci tenetur sit, aspernatur perferendis tempore, saepe quibusdam
          aliquam.
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
          <span>VIKRAM</span>
          <span>SARABHAI</span>
          <span>SPACE</span>
          <span>EXHIBITION</span>
          <span>(ISRO)</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          dolore. Molestias quia doloremque facilis recusandae provident! Eaque,
          dolore magnam amet rem minus ullam praesentium repudiandae tempore
          voluptas sed sunt, reprehenderit, earum exercitationem illo.
          Laudantium voluptas similique quis, eligendi nulla ea recusandae
          adipisci tenetur sit, aspernatur perferendis tempore, saepe quibusdam
          aliquam.
        </p>
      </div>
      <div className="d-sm-flex justify-content-around align-items-center">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/tech-expo/barc.png"}
          alt=""
          width="300"
          className="feat-imgs"
        />
        <div className="d-sm-flex flex-column justify-content-end m-5 fs-1 fw-bold expo-titles">
          <span>COUNCIL OF</span>
          <span>SCIENTIFIC &</span>
          <span>INDUSTRIAL</span>
          <span>RESEARCH</span>
        </div>
      </div>
      <div>
        <p className="m-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          dolore. Molestias quia doloremque facilis recusandae provident! Eaque,
          dolore magnam amet rem minus ullam praesentium repudiandae tempore
          voluptas sed sunt, reprehenderit, earum exercitationem illo.
          Laudantium voluptas similique quis, eligendi nulla ea recusandae
          adipisci tenetur sit, aspernatur perferendis tempore, saepe quibusdam
          aliquam.
        </p>
      </div>
    </div>
  );
};

export default ExpoFeatures;
