import { Typography } from "antd";
import React from "react";
import * as json from "../../json-data/jsonData.json";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import heroImage2 from "../../../public/section/Backgroundimage.webp";

function HeroSection() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage2.src})`, // Use the image source
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: isMobile ? "" : "6rem",
        paddingTop: isMobile ? "5rem" : "15rem",
        marginLeft: "auto",
        marginRight: "auto",
        ...backgroundImageStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "78rem",
        }}
      >
        <Typography
          style={{
            fontSize: isMobile ? "1.5rem" : "3.125rem",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: isMobile ? "2.5rem" : "3.875rem",
            marginBottom: "1rem",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Precisely Engineered, Creatively Transformed.
        </Typography>
        <Typography
          style={{
            fontWeight: 300,
            textAlign: "center",
            fontSize: isMobile ? "0.875rem" : "1.25rem",
            opacity: 0.6,
            color: "white",
            lineHeight: isDesktop
              ? "2.125rem"
              : isTablet
              ? "2.125rem"
              : "1.5rem",
            marginBottom: isMobile ? 0 : "0.625rem",
            fontFamily: "Montserrat, sans-serif",
            padding: isMobile ? "0rem 1rem" : "0rem 5rem",
            backgroundColor: isMobile ? '#16131ee0' : 'transparent',
          }}
        >
          {json.section1.part2}
        </Typography>
      </div>
    </div>
  );
}

export default HeroSection;
