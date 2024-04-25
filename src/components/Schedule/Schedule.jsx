import React from "react";
import "./Schedule.css";

const Timeline = () => {
  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line">Schedule</h1>
        <hr className="heading-underline" />
      </div>
      <div className="Schedule_main" id="Schedule">
        <div className="Schedule_container">
          <ul>
            <li>
              <h3 className="Schedule_heading">Day 0-ABSTRACT SUBMISSION</h3>
              <p>       
              The abstract submission form and registration
              procedure are open till May 8th. There will be 
              a link to the form on the Devfolio and Whatsapp group.
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">8 May 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Day 1</h3>
              <p>
              The hackathon will commence in the presence of judges, 
              mentors, and participants in online mode. An overview 
              will be given. Teams will pitch their ideas and participants' 
              progress will be evaluated. Meal breaks in between would be given.
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">10 May 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Day 2</h3>
              <p>
              Day 2 will be conducted in MICROSOFT OFFICE ,GURGAON. Top 20-25 shortlisted
              teams will compete against each other in the final round of  hackathon where 
              teams will prepare their prototypes. Day 2 will end with the closing ceremony.
              </p>
               {/* <a href="#">Read More &gt;</a>  */}
              <span className="Schedule_date">11 May 2024</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
