"use client";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import React from "react";
import About from "@/components/AboutV2";
import { Col, Row, Typography } from "antd";
import Underline from "@/components/Underline";
import plantImage from "../../../public/section/plant_image.jpg";
import Image from "next/image";

function Index() {
  const { isMobile } = useScreenDetector();
  return (
    <div>
      <div className="page-container" style={{ paddingBottom: "1rem" }}>
        <Underline title="About Company" />

        <Row gutter={[40, 32]} align="middle" style={{ marginTop: "1rem" }}>
          <Col xs={24} lg={13}>
            <div
              className="surface-card"
              style={{
                padding: isMobile ? "1.5rem 1.25rem" : "2.25rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                borderLeft: "4px solid var(--brand-navy)",
              }}
            >
              <Typography
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.75,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                We introduce ourselves as &quot;Creative Engineers&quot; -a
                precision engineering component manufacturer as well as
                sub-assembly solution provider. The company was established in
                the year 2022 with the aim of delivering precise machined parts
              </Typography>

              <div
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "var(--border-subtle)",
                }}
              />

              <Typography
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                In accordance to the ISO 9001:2015 standard, all of our products
                are made with precise skills and competence, along with
                maintenance of all kinds of reports and documentation as per the
                standard. Every component is inspected and validated
                step-by-step before moving on to subsequent operations.
              </Typography>

              <Typography
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                We believe having a fundamental set of values—commitment,
                reliability, accountability, and integrity—is essential to
                maintaining a positive work environment, which is essential to
                ensuring the continued success of the company. Together with
                having a common set of principles, our team members are
                experienced, focused, and equipped with technical skills to
                produce goods of the finest quality.
              </Typography>
            </div>
          </Col>

          <Col xs={24} lg={11}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--surface-muted)",
              }}
            >
              <Image
                src={plantImage}
                alt="Plant image"
                height={420}
                width={650}
                style={{
                  width: "100%",
                  height: isMobile ? "260px" : "410px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <About />
    </div>
  );
}

export default Index;

