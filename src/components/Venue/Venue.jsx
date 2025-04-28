import React from "react";
import "./Venue.css";
import { FaStreetView } from "react-icons/fa6";

const Venue = () => {
  return (
    <div className="venue-section" id="Venue">
      <div className="venue-head-section">
        <h1 className="heading-tag-line">Venue</h1>
        <hr className="heading-underline" />
      </div>

      <div className="venue-container">
        <div className="venue-subheading-right">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2347437806206!2d77.0909444!3d28.502584299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192bd6ccaeb3%3A0xae4dc02e39c2931f!2sMasters%27%20Union%20School%20of%20Business!5e0!3m2!1sen!2sin!4v1745673730058!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Masters Union Map"
          ></iframe>
        </div>
        <div className="venue-subsection">
          <div className="venue-subheading-left">
            <h4 className="venue-date">10-11 May, 2025</h4>
            <address className="venue-address">
              Masters Union, Phase II, Udyog Vihar, Sector 20, Near Moulsari Avenue Merto Station, DLF Cyber Park Gurugram, Haryana, 122022
            </address>
            <div className="venue-location">
              <a
                href="https://maps.app.goo.gl/sKAu1LHgKgPLtJNg6?g_st=aw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaStreetView />
                <h4>See Venue in 360&deg;</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
