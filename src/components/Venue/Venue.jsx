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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.200376812767!2d77.09526199999999!3d28.5036185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d197beb51967b%3A0xa7071dae502ba78d!2sDLF%20Downtown%20Gurugram!5e0!3m2!1sen!2sin!4v1715397656546!5m2!1sen!2sin"  
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          
        </div>
        <div className="venue-subsection">
          <div className="venue-subheading-left">
            <h4 className="venue-date">10-11 May, 2024</h4>
            <address className="venue-address">
            Microsoft Corporation India Pvt. Ltd.
            DLF Downtown, Level 8, Block 2
            DLF Phase - 3, Sector - 25A
            Gurugram 122002
            </address>
            <div className="venue-location">
              <a
                href="https://www.google.com/maps/place/Microsoft/@28.4895579,77.0917407,3a,90y,252.57h,78.46t/data=!3m8!1e1!3m6!1sAF1QipPYg0YhGmU3noe5GwqRGtqOxRv4Pc_8lLGDwm6z!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPYg0YhGmU3noe5GwqRGtqOxRv4Pc_8lLGDwm6z%3Dw203-h100-k-no-pi-0-ya96.42075-ro-0-fo100!7i8704!8i4352!4m15!1m7!3m6!1s0x390d1937a3b855cb:0x4b8c750d9d64fe72!2sMicrosoft!8m2!3d28.4890758!4d77.0917585!16s%2Fg%2F1tdxtdj3!3m6!1s0x390d1937a3b855cb:0x4b8c750d9d64fe72!8m2!3d28.4890758!4d77.0917585!10e5!16s%2Fg%2F1tdxtdj3?entry=ttu"
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
