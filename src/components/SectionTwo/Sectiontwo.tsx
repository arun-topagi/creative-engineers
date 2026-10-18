import React from "react";
import { Col, Row, Typography } from "antd";
import {
  AppstoreOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import json from "../../json-data/jsonData.json";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import precission from "../../../public/section/precision.jpg";
import profession from "../../../public/section/profession.jpg";
import Image from "next/image";

function Sectiontwo() {
  const { isMobile } = useScreenDetector();

  const capabilities = [
    {
      icon: <TeamOutlined style={{ fontSize: "1.35rem", color: "var(--brand-navy)" }} />,
      header: json.section3.part1.header,
      paragraph: json.section3.part1.paragraph,
      accent: "var(--brand-navy)",
    },
    {
      icon: <AppstoreOutlined style={{ fontSize: "1.35rem", color: "var(--brand-red)" }} />,
      header: json.section3.part2.header,
      paragraph: json.section3.part2.paragraph,
      accent: "var(--brand-red)",
    },
    {
      icon: <ToolOutlined style={{ fontSize: "1.35rem", color: "var(--brand-navy)" }} />,
      header: json.section3.part3.header,
      paragraph: json.section3.part3.paragraph,
      accent: "var(--brand-navy)",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Section 2: Excellence in Precision Engineering */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "2.75rem 1rem" : "4.5rem 2rem",
        }}
      >
        <Row gutter={[48, 36]} align="middle">
          <Col xs={24} lg={12}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    height: "4px",
                    width: "56px",
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

              <Typography
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.15rem)",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  marginBottom: "1.25rem",
                  color: "var(--text-primary)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Delivering Excellence in
                <br />
                Precision Engineering
                <br />
                Components and Sub-Assemblies
              </Typography>

              <Typography
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {json.section2.part2}
              </Typography>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <Image
                src={precission}
                alt="Precision Engineering Inspection"
                width={600}
                height={420}
                style={{
                  width: "100%",
                  height: isMobile ? "280px" : "390px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </Col>
        </Row>
      </section>

      {/* Section 3: Core Capabilities */}
      <section
        style={{
          backgroundColor: "var(--surface-muted)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: isMobile ? "2.75rem 1rem" : "4.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[48, 36]} align="middle">
            <Col xs={24} lg={11} order={isMobile ? 2 : 1}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Image
                  src={profession}
                  alt="Skilled Engineering Professionals"
                  width={600}
                  height={460}
                  style={{
                    width: "100%",
                    height: isMobile ? "300px" : "450px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </Col>

            <Col xs={24} lg={13} order={isMobile ? 1 : 2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="surface-card surface-card-hover"
                    style={{
                      padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                      borderLeft: `4px solid ${item.accent}`,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        backgroundColor: "var(--surface-muted)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontSize: "1.2rem",
                          marginBottom: "0.4rem",
                          lineHeight: 1.35,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {item.header}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "0.98rem",
                          lineHeight: 1.65,
                          color: "var(--text-secondary)",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {item.paragraph}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Sectiontwo;

