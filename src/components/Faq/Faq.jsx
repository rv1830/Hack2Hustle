import React, { useState } from "react";
import { FAQ__data } from "./data";

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
  }

  const styles = {
    faqContainer: {
      padding: "4rem 2rem",
      backgroundColor: "#000000",
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      minHeight: "100vh",
    },
    aboutHeadSection: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    headingTagLine: {
      marginBottom: "0.5rem",
      letterSpacing: "2px",
      fontSize: "36px",             // Corrected 'fontsize' to 'fontSize'
      color: "red",
      textTransform: "uppercase",   // Corrected 'texttransform' to 'textTransform'
      fontWeight: "bold"
    },
    headingUnderline: {
      width: "80px",
      height: "3px",
      backgroundColor: "#ff0033",
      border: "none",
      margin: "0 auto",
    },
    accordionFaq: {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    accordionItem: {
      backgroundColor: "#111111",
      borderRadius: "8px",
      padding: "0.8rem", // Uniform padding for all
      cursor: "pointer",
      transition: "background-color 0.4s ease, transform 0.3s ease",
      overflow: "hidden",
    },
    accordionHeading: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    question: {
      fontSize: "1rem", // smaller font size
      fontWeight: "600",
      paddingLeft: "1rem", // added left padding to align text better
      transition: "color 0.3s ease",
    },
    questionActive: {
      color: "#ff0033",
    },
    toggleIcon: {
      fontSize: "1.5rem",
      color: "#ff0033",
      transition: "transform 0.3s ease",
    },
    answerWrapper: {
      maxHeight: "0px",
      overflow: "hidden",
      transition: "max-height 0.5s ease, padding 0.3s ease",
    },
    answerWrapperActive: {
      maxHeight: "500px",
      paddingTop: "1rem",
    },
    answer: {
      fontSize: "0.9rem",
      lineHeight: "1.5",
      color: "#bbbbbb",
      paddingLeft: "1rem", // added left padding to answer text as well
    },
  };

  return (
    <React.Fragment>
      <div style={styles.faqContainer}>
        <div style={styles.aboutHeadSection}>
          <h1 style={styles.headingTagLine}>FAQs</h1>
          <hr style={styles.headingUnderline} />
        </div>

        <div style={styles.accordionFaq}>
          {FAQ__data.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.accordionItem,
                backgroundColor: accordion === index ? "#1a1a1a" : "#111111",
                transform: accordion === index ? "scale(1.02)" : "scale(1)",
              }}
              onClick={() => toggleAccordion(index)}
            >
              <div style={styles.accordionHeading}>
                <h3
                  style={{
                    ...styles.question,
                    ...(accordion === index ? styles.questionActive : {}),
                  }}
                >
                  {item.question}
                </h3>
                <div
                  style={{
                    ...styles.toggleIcon,
                    transform: accordion === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  {accordion === index ? "-" : "+"}
                </div>
              </div>

              <div
                style={{
                  ...styles.answerWrapper,
                  ...(accordion === index ? styles.answerWrapperActive : {}),
                }}
              >
                <p style={styles.answer}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Accordion;
