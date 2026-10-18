"use client";

import TextField from "@/components/input";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { CheckCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import React, { useState } from "react";

function About() {
  const { isMobile } = useScreenDetector();
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "2.5rem 0.5rem 3rem" : "4rem 1.5rem 4.5rem",
      }}
    >
      <div
        className="surface-card"
        style={{
          width: "100%",
          maxWidth: "880px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: isMobile ? "2rem 1.25rem" : "3rem 3.5rem",
          boxShadow: "var(--shadow-md)",
          borderTop: "4px solid var(--brand-navy)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "1.75rem" : "2.5rem",
          }}
        >
          <Typography
            style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.15rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
              marginBottom: "0.6rem",
            }}
          >
            Get in touch
          </Typography>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
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
                backgroundColor: "var(--brand-navy)",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>

        <div>
          {showThankYou ? (
            <div
              style={{
                marginTop: "1rem",
                padding: "2rem 1.5rem",
                borderRadius: "12px",
                backgroundColor: "#F0FDF4",
                border: "1px solid #BBF7D0",
                color: "#166534",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <CheckCircleFilled style={{ fontSize: "2.5rem", color: "#16A34A" }} />
              <div style={{ fontSize: "1.35rem", fontWeight: 600 }}>
                Thank You! Your message has been submitted.
              </div>
            </div>
          ) : (
            <TextField setShowThankYou={setShowThankYou} />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;

