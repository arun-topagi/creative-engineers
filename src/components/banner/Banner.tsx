import React from "react";
import { useScreenDetector } from "@/hooks/useScreenDetector";

function Banner() {
  const { isMobile } = useScreenDetector();
  return (
    <div
      style={{
        height: "250px",
        width: isMobile ? "100%" : "450px",
        marginBottom: "10px",
        lineHeight: "20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(229, 227, 223)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.040973339157!2d75.4948299!3d19.8804917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba50036902c01%3A0xc6777c1ae5b14a23!2sCreative%20Engineers!5e0!3m2!1sen!2sin!4v1714922557998!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Banner;
