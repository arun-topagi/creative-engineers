"use client";
import Underline from "@/components/Underline";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

function Index() {
  return (
    <div className="page-container">
      <Underline title="Quality Assurance" />
      <div
        className="surface-card"
        style={{
          marginTop: "2rem",
          padding: "4.5rem 2rem",
          textAlign: "center",
          backgroundColor: "var(--surface-muted)",
          border: "1px dashed var(--border-strong)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "var(--brand-navy-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--brand-navy)",
            fontSize: "1.85rem",
          }}
        >
          <SafetyCertificateOutlined />
        </div>
        <Title
          style={{
            textAlign: "center",
            margin: 0,
            color: "var(--text-primary)",
            fontWeight: 700,
            fontFamily: "Montserrat, sans-serif",
          }}
          level={3}
        >
          Coming Soon
        </Title>
      </div>
    </div>
  );
}

export default Index;

