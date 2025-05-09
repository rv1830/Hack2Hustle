import React from "react";
import { sponserData } from "./data";
import SponserList from "./SponserList";
import "./sponsored.css";

const Partners = () => {
  return (
    <div className="slider" id="Partners">
      <div className="about-head-section">
        <h1 className="heading-tag-line">Community Partners</h1>
        <hr className="heading-underline" />
      </div>
      <SponserList items={sponserData} />
    </div>
  );
};
export default Partners;
