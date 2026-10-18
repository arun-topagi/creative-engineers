import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

type Props = {
  title: string;
  align?: "left" | "center";
};

const Underline = ({ title, align = "left" }: Props) => {
  return (
    <div
      style={{
        marginBottom: "1.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
      }}
    >
      <Title
        level={2}
        style={{
          textTransform: "uppercase",
          fontFamily: "Montserrat, sans-serif",
          marginBottom: "0.6rem",
          marginTop: 0,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "var(--text-primary)",
          fontSize: "clamp(1.45rem, 2.5vw, 2rem)",
          textAlign: align,
        }}
      >
        {title}
      </Title>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div
          style={{
            height: "4px",
            width: "68px",
            backgroundColor: "var(--brand-red)",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            height: "4px",
            width: "24px",
            backgroundColor: "var(--brand-navy)",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
};

export default Underline;