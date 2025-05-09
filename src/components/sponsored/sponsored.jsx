import React from "react"; 
import { sponserData } from "./data"; 
import SponserList from "./SponserList";  

const Sponser = () => {  
  const styles = {     
    slider: {       
      padding: "2rem 2rem",       
      backgroundColor: "#000000",       
      color: "#ffffff",       
      fontFamily: "'Poppins', sans-serif",       
      position: "relative",     
    },     
    aboutHeadSection: {       
      textAlign: "center",       
      marginBottom: "3rem",     
    },     
    headingTagLine: {       
      fontSize: "2rem",       
      fontWeight: "700",       
      marginBottom: "0.5rem",       
      letterSpacing: "2px",     
    },     
    headingUnderline: {       
      width: "80px",       
      height: "3px",       
      backgroundColor: "#ff0033",       
      border: "none",       
      margin: "0 auto",     
    },     
    comingSoon: {       
      backgroundColor: "rgba(0, 0, 0, 0.7)",       
      color: "#ffffff",       
      textAlign: "center",       
      padding: "2rem",       
      marginTop: "3rem",       
      borderRadius: "8px",       
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",     
    },     
    comingSoonHeading: {       
      fontSize: "2rem",       
      fontWeight: "700",       
      color: "#ff0033",       
      marginBottom: "1rem",     
    },     
    sponsorMessage: {       
      backgroundColor: "#111111",       
      borderRadius: "8px",       
      padding: "1.5rem",       
      marginTop: "2rem",       
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",     
    },     
    sponsorMessageHeading: {       
      fontSize: "1.5rem",       
      color: "#ff0033",       
      fontWeight: "600",     
    },     
    sponsorMessageText: {       
      fontSize: "1rem",       
      color: "#bbbbbb",       
      lineHeight: "1.6",     
    },     
    contactButton: {       
      backgroundColor: "#ff0033",       
      color: "#ffffff",       
      padding: "0.8rem 2rem",       
      borderRadius: "5px",       
      textDecoration: "none",       
      fontWeight: "bold",       
      fontSize: "1rem",       
      display: "inline-block",       
      marginTop: "1rem",     
    },     
    backgroundImage: {       
      position: "absolute",       
      inset: "0",       
      backgroundImage: "url('/placeholder.svg?height=800&width=800')",       
      backgroundRepeat: "repeat",       
      opacity: "0.05",       
      pointerEvents: "none",     
    },

    // Keyframes for infinite fade-out and fade-in effect with color change
    '@keyframes fadeInOut': {
      '0%': {
        opacity: 0,
        color: 'transparent', // Transparent
      },
      '50%': {
        opacity: 1,
        color: '#ffffff', // White
      },
      '100%': {
        opacity: 0,
        color: '#ff0033', // Red at the end
      },
    },
    
    // Applying animation to the element with the text you want to animate
    comingSoonHeadingAnimated: {
      fontSize: "2rem", 
      fontWeight: "700", 
      color: "#ff0033", 
      marginBottom: "1rem", 
      animation: "fadeInOut 3s infinite ease-in-out", // Infinite fade animation with ease-in-out
    }
  };  
  return (     
    <div style={styles.slider} id="Sponsor">    
      <div style={styles.aboutHeadSection}>         
        <h1 style={styles.headingTagLine}>Sponsors</h1>   
        <hr style={styles.headingUnderline} />    
      </div>  
  
      {/* Render the sponsor list here */}
      <SponserList items={sponserData} />
  
      {/* Background pattern */}
      <div style={styles.backgroundImage}></div>     
    </div>   
  );
  
};  

export default Sponser;
