import React from "react";
//import {aboutImg} from "./assets/—Pngtree—computer hacker_5418075.png";
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
          <img src="https://camo.githubusercontent.com/2024b4acc66429c1d1dfbe6bcfbe35897f5d939da3522d35922057296eeaf7e6/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f323133313939332f73637265656e73686f74732f343934383733362f74686f75676874776f726b732d6769665f6472696262626c652e676966" alt="img" className="hackathon-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
