"use client";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Space, Typography } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import companyLogo from "../../assets/LogoWithoutTagline.png";
import Logo from "../logo/Logo";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a href="/manufacturing" style={{ textDecoration: "none" }}>
        Manufacturing
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a href="/quality-assurance" style={{ textDecoration: "none" }}>
        Quality Assurance
      </a>
    ),
  },
];

function Navbar() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      {isMobile ? (
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
            zIndex: 100,
            backgroundColor: "rgb(228 235 243 / 57%)",
          }}
        >
          <Logo
            className="object-cover"
            src={companyLogo}
            height={150}
            width={200}
          />
          <MenuOutlined
            style={{ fontSize: 25 }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
          <Drawer
            placement="top"
            closable={false}
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
            key="top"
            style={{ padding: 0, marginTop: 72 }}
            mask={false}
            height={250}
            zIndex={1}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 0,
                overflowY: "hidden",
                gap: "1rem",
              }}
            >
              <Link
                href="/"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/" ? 700 : "",
                  }}
                >
                  Home
                </Typography>
              </Link>

              <Link
                href="/about"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/about" ? 700 : "",
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link
                href="/manufacturing"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/manufacturing" ? 700 : "",
                  }}
                >
                  Manufacturing
                </Typography>
              </Link>
              <Link
                href="/quality-assurance"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/quality-assurance" ? 700 : "",
                  }}
                >
                  Quality Assurance
                </Typography>
              </Link>
              <Link
                href="/downloads"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/downloads" ? 700 : "",
                  }}
                >
                  Downloads
                </Typography>
              </Link>
              <Link
                href="/contact-us"
                style={{ textDecoration: "none" }}
                onClick={() => setDrawerOpen(false)}
              >
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: pathname === "/contact-us" ? 700 : "",
                  }}
                >
                  Contact us
                </Typography>
              </Link>
            </div>
          </Drawer>
        </div>
      ) : (
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 50px",
            backgroundColor: "rgb(228 235 243 / 57%)",
          }}
        >
          <Logo
            className="object-cover"
            src={companyLogo}
            height={150}
            width={200}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  paddingTop: 9,
                  paddingBottom: 9,
                  fontSize: 12,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: pathname === "/" ? 700 : "",
                }}
              >
                Home
              </Typography>
            </Link>

            <Link href="/about" style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  paddingTop: 9,
                  paddingBottom: 9,
                  fontSize: 12,
                  marginLeft: 30,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: pathname === "/about" ? 700 : "",
                }}
              >
                About
              </Typography>
            </Link>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Typography
                    style={{
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      paddingTop: 9,
                      paddingBottom: 9,
                      fontSize: 12,
                      fontFamily: "Montserrat, sans-serif",
                      marginLeft: 30,
                  fontWeight: pathname === "/quality-assurance" || pathname === "/manufacturing"  ? 700 : "",
                }}
                  >
                    Facilities
                    <DownOutlined />
                  </Typography>
                </Space>
              </a>
            </Dropdown>

            <Link href="/downloads" style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  paddingTop: 9,
                  paddingBottom: 9,
                  fontSize: 12,
                  marginLeft: 30,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: pathname === "/downloads" ? 700 : "",
                }}
              >
                Downloads
              </Typography>
            </Link>

            <Link href="/contact-us" style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  paddingTop: 9,
                  paddingBottom: 9,
                  fontSize: 12,
                  marginLeft: 30,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: pathname === "/contact-us" ? 700 : "",
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
