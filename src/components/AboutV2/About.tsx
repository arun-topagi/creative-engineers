"use client";

import TextField from "@/components/input";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { Typography } from "antd";
import React, { useState } from "react";

function About() {
  const { isMobile } = useScreenDetector();
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div
      style={{
        marginLeft: isMobile ? "15px" : "30px",
        marginRight: isMobile ? "15px" : "30px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: isMobile ? "50px" : "80px",
        }}
      >
        <Typography
          style={{
            marginTop: "10px",
            fontSize: "1.875rem",
            fontWeight: 400,
            lineHeight: "62px",
            fontFamily: "Montserrat",
          }}
        >
          Get in touch
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: isMobile ? "center" : "initial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            marginBottom: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            width: isMobile ? "90%" : "70%",
            maxWidth: isMobile ? "470px" : "",
          }}
        >
          <div>
            {showThankYou ? (
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "36px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                Thank You! Your message has been submitted.
              </div>
            ) : (
              <TextField setShowThankYou={setShowThankYou} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
