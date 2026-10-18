"use client";

import { useScreenDetector } from "@/hooks/useScreenDetector";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import companyLogo from "../../../public/logo/new_updated_logo.png";
import Logo from "../logo/Logo";
import IndianFlag from "../../../public/section/Indianflag.jpg";
import MakeInIndia from "../../../public/section/makeinind.jpg";
import Banner from "../banner";
import Link from "next/link";

const { Title, Paragraph } = Typography;

function Footer() {
  const { isMobile } = useScreenDetector();
  return (
    <footer
      style={{
        backgroundColor: "var(--brand-navy-dark)",
        color: "#F8FAFC",
        borderTop: "4px solid var(--brand-red)",
        padding: isMobile ? "2.5rem 1rem 1.5rem" : "3.5rem 2.5rem 1.75rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "stretch" : "flex-start",
            gap: isMobile ? "2rem" : "2.5rem",
          }}
        >
          {/* Brand Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1rem 1.25rem",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ display: "inline-block" }}>
                <Logo
                  src={companyLogo}
                  height={isMobile ? 95 : 110}
                  width={isMobile ? 230 : 260}
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </Link>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.25rem",
                  marginTop: "0.75rem",
                  paddingTop: "0.65rem",
                  borderTop: "1px solid #E2E8F0",
                  width: "100%",
                }}
              >
                <Logo src={IndianFlag} height={26} width={44} />
                <Logo src={MakeInIndia} height={26} width={56} />
              </div>
            </div>
          </div>

          {/* Contact Details Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "360px",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <EnvironmentOutlined
                style={{
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  marginTop: "4px",
                }}
              />
              <div>
                <Title
                  level={5}
                  style={{
                    margin: "0 0 4px 0",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Address
                </Title>
                <Paragraph
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  D-83, Five Star MIDC, Shendra, Chh. <br />
                  Sambhajinagar(Aurangabad)-431154
                </Paragraph>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <PhoneOutlined
                style={{
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  marginTop: "4px",
                }}
              />
              <div>
                <Title
                  level={5}
                  style={{
                    margin: "0 0 4px 0",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Phone
                </Title>
                <Paragraph
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  <a
                    href="tel:+918446619690"
                    className="footer-link"
                    style={{ color: "#FFFFFF" }}
                  >
                    +91 8446619690
                  </a>
                  <br />
                  <a
                    href="tel:+919822544596"
                    className="footer-link"
                    style={{ color: "#FFFFFF" }}
                  >
                    +91 9822544596
                  </a>
                </Paragraph>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MailOutlined
                style={{
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                  marginTop: "4px",
                }}
              />
              <div>
                <Title
                  level={5}
                  style={{
                    margin: "0 0 4px 0",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Email ID
                </Title>
                <Paragraph
                  style={{
                    color: "#FFFFFF",
                    margin: 0,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  <a
                    href="mailto:creativeengineers2024@gmail.com"
                    className="footer-link"
                    style={{ color: "#FFFFFF" }}
                  >
                    creativeengineers2024@gmail.com
                  </a>
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div style={{ width: isMobile ? "100%" : "auto" }}>
            <Banner />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            marginTop: "2.25rem",
            marginBottom: "1.25rem",
          }}
        />
        <Typography
          style={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#E2E8F0",
          }}
        >
          Copyright @ 2026 Creative Engineers
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
