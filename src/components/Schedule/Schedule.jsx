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
              <h3 className="Schedule_heading">Day 1</h3>
              <p>       
                The hackathon will kick off with the presence of judges, 
                mentors, and participants. An overview will be given.
                Teams will be formed and ideas will be pitched.
                Participants' progress will be evaluated.
                Meal breaks in between would be given.
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">11 May 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Day 2</h3>
              <p>
                Day 1 projects will continue.
                Mentor feedback sessions will be held.
                Projects will be showcased.
                The results will be announced and prize distribution will be there.
                The event will conclude with a closing ceremony.
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">12 May 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Second Day</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Fugit excepturi accusamus minus
                totam
              </p>
               {/* <a href="#">Read More &gt;</a>  */}
              <span className="Schedule_date">30 July 2023</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
