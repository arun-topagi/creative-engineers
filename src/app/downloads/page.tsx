"use client";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import React from "react";
import Underline from "@/components/Underline";
import companyLogo from "../../../public/section/hero.jpg";
import { DownloadOutlined, FilePdfOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

function Index() {
  const { isMobile } = useScreenDetector();

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href =
      "https://creativengineers.s3.ap-south-1.amazonaws.com/Company%2BProfile.pdf";
    link.download = "Company Profile.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
      <Underline title="Downloads" />
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        <Card
          onClick={onButtonClick}
          className="surface-card surface-card-hover"
          style={{
            width: 340,
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "white",
            cursor: "pointer",
            borderTop: "4px solid var(--brand-navy)",
          }}
          cover={
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <Image
                src={companyLogo}
                alt="Company Profile"
                height={200}
                width={340}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "var(--brand-red)",
                  color: "#FFFFFF",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <FilePdfOutlined />
                <span>PDF</span>
              </div>
            </div>
          }
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Meta
              title={
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Company Profile
                </span>
              }
              description={
                <span
                  style={{
                    color: "var(--brand-navy)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Click to download
                </span>
              }
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--brand-navy-light)",
                color: "var(--brand-navy)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.15rem",
              }}
            >
              <DownloadOutlined />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Index;

