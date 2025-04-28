import React from "react";
import hackathonLogo from "/images/Hackblocks_Logo-removebg-preview.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    mainContainer: {
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "4rem 2rem 2rem 2rem",
      fontFamily: "'Poppins', sans-serif",
    },
    contentContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logoContent: {
      flex: "1",
    },
    logoImg: {
      width: "180px",
      height: "auto",
      transition: "transform 0.3s ease",
    },
    venueContent: {
      flex: "1",
    },
    date: {
      color: "#ff0033",
      fontWeight: "bold",
      fontSize: "1rem",
      marginBottom: "0.5rem",
    },
    footerTitle: {
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "0.8rem",
    },
    address: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#bbbbbb",
    },
    socialContent: {
      flex: "1",
    },
    contentText: {
      textAlign: "left",
    },
    socialLogo: {
      display: "flex",
      gap: "1.5rem",
      marginTop: "1rem",
      listStyle: "none",
      padding: "0",
    },
    iconLink: {
      fontSize: "1.8rem",
      color: "#ffffff",
      transition: "color 0.3s ease, transform 0.3s ease",
    },
    copyContainer: {
      marginTop: "3rem",
      textAlign: "center",
      fontSize: "0.9rem",
      paddingTop: "1.5rem",
      borderTop: "1px solid #222",
      color: "#666666",
    },
    spanRed: {
      color: "#ff0033",
      fontWeight: "bold",
    },
  };

  return (
    <footer style={styles.mainContainer} id="Footer">
      <div style={styles.contentContainer}>
        <div style={styles.logoContent}>
          <a href="/">
            <img
              src={hackathonLogo}
              alt="HackerSpace"
              style={styles.logoImg}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </a>
        </div>

        <div style={styles.venueContent}>
          <h4 style={styles.date}>10-11 May, 2025</h4>
          <h3 style={styles.footerTitle}>Venue Location</h3>
          <address style={styles.address}>
            Masters Union, Phase II, Udyog Vihar, Sector 20, Near Moulsari Avenue Metro Station, DLF Cyber Park Gurugram, Haryana, 122022
          </address>
        </div>

        <div style={styles.socialContent}>
          <div style={styles.contentText}>
            <h3 style={styles.footerTitle}>Social Connection</h3>
            <ul style={styles.socialLogo}>
              <li>
                <a
                  href="https://twitter.com/HackBlocks"
                  target="_blank"
                  style={styles.iconLink}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ff0033";
                    e.target.style.transform = "scale(1.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hack-blocks-659215301/"
                  target="_blank"
                  style={styles.iconLink}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ff0033";
                    e.target.style.transform = "scale(1.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hackblocks/"
                  target="_blank"
                  style={styles.iconLink}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ff0033";
                    e.target.style.transform = "scale(1.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.copyContainer}>
        <p>
          <span style={styles.spanRed}>©</span> 2025 | Developer{" "}
          <span style={styles.spanRed}>Team Hack2Hustle</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
