import React from "react";
import SponserItem from "./SponserItem";
import "./sponsored.css";

const SponserList = ({ items }) => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...items, ...items].map((sponsor, index) => (
          <SponserItem
            key={`${sponsor.id}-${index}`}
            id={sponsor.id}
            name={sponsor.sponserName}
            website={sponsor.sponserWebsite} // ✅ fixed typo
            image={sponsor.sponserImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SponserList;
