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
            {/* Day 1 */}
            <li>
              <h3 className="Schedule_heading">Team Attendance</h3>
              <p>Participants check in and confirm attendance.</p>
              <span className="Schedule_date">10 May 2025 - 10 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Speaker Session</h3>
              <p>Guest speaker shares insights and inspiration.</p>
              <span className="Schedule_date">10 May 2025 - 11 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Hack Start</h3>
              <p>Hackathon officially kicks off.</p>
              <span className="Schedule_date">10 May 2025- 12 NOON</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 1 Mentoring</h3>
              <p>Mentors help guide teams through early project phases.</p>
              <span className="Schedule_date">10 May 2025 - 2 PM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 1 Judging</h3>
              <p>Judges evaluate initial project progress.</p>
              <span className="Schedule_date">10 May 2025 - 4 PM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 1 Results</h3>
              <p>Results of Round 1 announced.</p>
              <span className="Schedule_date">10 May 2025 - 6 PM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 2 Starts</h3>
              <p>Qualified teams begin working on Round 2.</p>
              <span className="Schedule_date">10 May 2025 - 6:30 PM</span>
              <span className="circle"></span>
            </li>

            {/* Day 2 */}
            <li>
              <h3 className="Schedule_heading">Round 2 Mentoring</h3>
              <p>Mentors assist teams in refining ideas.</p>
              <span className="Schedule_date">11 May 2025 - 12 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 2 Judging</h3>
              <p>Projects are evaluated by the judges.</p>
              <span className="Schedule_date">11 May 2025 - 5 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Round 2 Results & Finale Round Starts</h3>
              <p>Finalists are announced and final round begins.</p>
              <span className="Schedule_date">11 May 2025 - 7 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Finale Round Mentoring</h3>
              <p>Last mentoring session to polish final submissions.</p>
              <span className="Schedule_date">11 May 2025 - 9 AM</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Finale Round Judging</h3>
              <p>Final round projects judged for winner selection.</p>
              <span className="Schedule_date">11 May 2025 - 12 NOON</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Winner Announcement</h3>
              <p>Winners declared and ceremony concludes the event.</p>
              <span className="Schedule_date">11 May 2025 - 2 PM</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
