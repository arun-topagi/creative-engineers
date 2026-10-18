import { Typography } from "antd";
import React from "react";
import json from "../../json-data/jsonData.json";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import heroImage2 from "../../../public/section/Backgroundimage.webp";

function HeroSection() {
  const { isMobile } = useScreenDetector();

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.35) 100%), url(${heroImage2.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: isMobile ? "5rem" : "9.5rem",
        paddingTop: isMobile ? "5rem" : "9.5rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        width: "100%",
        borderBottom: "4px solid var(--brand-red)",
        ...backgroundImageStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "66rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "1.1rem",
          }}
        >
          <div
            style={{
              height: "4px",
              width: "48px",
              backgroundColor: "var(--brand-red)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              height: "4px",
              width: "20px",
              backgroundColor: "#FFFFFF",
              borderRadius: "2px",
            }}
          />
        </div>

        <Typography
          style={{
            fontSize: "clamp(1.85rem, 4.2vw, 3.25rem)",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "1rem",
            color: "#FFFFFF",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.6)",
          }}
        >
          Precisely Engineered, Creatively Transformed.
        </Typography>

        <Typography
          style={{
            fontWeight: 500,
            textAlign: "center",
            fontSize: isMobile ? "0.95rem" : "1.18rem",
            color: "#F8FAFC",
            lineHeight: isMobile ? 1.65 : 1.75,
            maxWidth: "48rem",
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {json.section1.part2}
        </Typography>
      </div>
    </section>
  );
}

export default HeroSection;


