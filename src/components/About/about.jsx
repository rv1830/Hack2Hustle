import React from "react";
import aboutImg from "./assets/reshot-icon-programmer-A734K8CJMZ.svg";
import "./about.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
        <h1 className="heading-tag-line">About</h1>
        <hr className="heading-underline" />
      </div>
      <div className="about-subsection" id="About">
        <div className="about-left-section">
          <h2 className="about-heading">
            HackBlocks - Here ideas will take flight.
          </h2>
          <p>
          At Hack Blocks, The mission is to provide a platform for participants 
          to push the boundaries of their skills, learn from industry experts, 
          and network with like-minded individuals. By bringing together diverse
          talents and perspectives, we aim to inspire the next generation of 
          innovators and change-makers.
          </p>
          <p>
          We believe in the power of hacking to drive positive change and foster 
          innovation. Whether you're a seasoned coder, a creative designer, or a 
          problem-solving enthusiast, there's a place for you in our hackathon. 
          From developing groundbreaking software solutions to crafting innovative 
          hardware prototypes, the possibilities are endless.
          </p>
          {/* <p>
          Join us at Hack Blocks and unleash your creativity, tackle real-world 
          challenges, and make lasting connections. Together, let's build a brighter 
          future through technology.
          </p> */}
        </div>
        <div className="about-right-section">
          <img src={aboutImg} alt="img" className="hackathon-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
