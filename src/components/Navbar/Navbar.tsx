"use client";
import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { usePathname } from "next/navigation";
import companyLogo from "../../assets/logoNoTag.png";
import Logo from "../logo/Logo";

function Navbar() {
  const { isMobile } = useScreenDetector();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isFacilitiesActive =
    pathname === "/manufacturing" || pathname === "/quality-assurance";

  const items: MenuProps["items"] = [
    {
      key: "manufacturing",
      label: (
        <Link
          href="/manufacturing"
          style={{
            textDecoration: "none",
            fontWeight: pathname === "/manufacturing" ? 700 : 500,
            color:
              pathname === "/manufacturing"
                ? "var(--brand-navy)"
                : "var(--text-primary)",
            padding: "4px 8px",
            display: "block",
          }}
        >
          Manufacturing
        </Link>
      ),
    },
    {
      key: "quality-assurance",
      label: (
        <Link
          href="/quality-assurance"
          style={{
            textDecoration: "none",
            fontWeight: pathname === "/quality-assurance" ? 700 : 500,
            color:
              pathname === "/quality-assurance"
                ? "var(--brand-navy)"
                : "var(--text-primary)",
            padding: "4px 8px",
            display: "block",
          }}
        >
          Quality Assurance
        </Link>
      ),
    },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/quality-assurance", label: "Quality Assurance" },
    { href: "/downloads", label: "Downloads" },
    { href: "/contact-us", label: "Contact us" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "0.65rem 1rem" : "0.75rem 2.5rem",
        }}
      >
        <Link
          href="/"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <Logo
            src={companyLogo}
            height={isMobile ? 48 : 58}
            width={isMobile ? 165 : 200}
            style={{ objectFit: "contain", height: "auto" }}
          />
        </Link>

        {isMobile ? (
          <>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              style={{
                background: "var(--surface-muted)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                width: "42px",
                height: "42px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              {drawerOpen ? (
                <CloseOutlined style={{ fontSize: 18 }} />
              ) : (
                <MenuOutlined style={{ fontSize: 20 }} />
              )}
            </button>

            <Drawer
              placement="right"
              closable={true}
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              width={280}
              zIndex={1050}
              title={
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--brand-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Creative Engineers
                </span>
              }
            >
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {mobileNavLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                      style={{
                        textDecoration: "none",
                        padding: "0.85rem 1rem",
                        borderRadius: "8px",
                        backgroundColor: isActive
                          ? "var(--brand-navy-light)"
                          : "transparent",
                        borderLeft: isActive
                          ? "4px solid var(--brand-red)"
                          : "4px solid transparent",
                        color: isActive
                          ? "var(--brand-navy)"
                          : "var(--text-primary)",
                        fontWeight: isActive ? 700 : 600,
                        fontSize: "0.9rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </Drawer>
          </>
        ) : (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link
              href="/"
              className={`nav-link-item ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`nav-link-item ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>

            <Dropdown menu={{ items }} placement="bottomLeft">
              <span
                onClick={(e) => e.preventDefault()}
                className={`nav-link-item ${
                  isFacilitiesActive ? "active" : ""
                }`}
              >
                <Space size={6}>
                  <span>Facilities</span>
                  <DownOutlined style={{ fontSize: 11 }} />
                </Space>
              </span>
            </Dropdown>

            <Link
              href="/downloads"
              className={`nav-link-item ${
                pathname === "/downloads" ? "active" : ""
              }`}
            >
              Downloads
            </Link>

            <Link
              href="/contact-us"
              className={`nav-cta-btn ${
                pathname === "/contact-us" ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;

