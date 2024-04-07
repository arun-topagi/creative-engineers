"use client";


import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Typography } from "antd";
import React, { useEffect, useState } from "react";
import * as json from "../../json-data/jsonData.json";
import Link from "next/link";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { usePathname, useSearchParams } from 'next/navigation'

function Navbar() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname()

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
            zIndex:100,
          }}
        >
          <Typography
            style={{
              flex: 1,
              flexFlow: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif",
              fontSize: 25,
              fontWeight: 600,
              zIndex: "4",
            }}
          >
            {json.orgName}
          </Typography>
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
            style={{ padding: 0, marginTop: 60}}
            mask={false}
            height={110}
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
                gap:'1rem'
              }}
            >
             <Link href="/" style={{textDecoration:'none'}} onClick={()=>setDrawerOpen(false)}>
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight:pathname==="/" ? 700:''
                  }}
                >
                  Home
                </Typography>
              </Link>

              <Link href="/about" style={{textDecoration:'none'}} onClick={()=>setDrawerOpen(false)}>
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight:pathname==="/about"? 700:''
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link href="/services" style={{textDecoration:'none'}} onClick={()=>setDrawerOpen(false)}>
                <Typography
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight:pathname==="/services"? 700:''
                  }}
                >
                  Services
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
          }}
        >
          <Typography
            style={{
              flexFlow: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif",
              fontSize: 25,
              fontWeight: 600,
            }}
          >
            {json.orgName}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" style={{textDecoration:'none'}}>
            <Typography
              style={{
                letterSpacing: 1,
                textTransform: "uppercase",
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 12,
                fontFamily: "Montserrat, sans-serif",
                fontWeight:pathname==="/" ? 700:''
              }}
            >
              Home
            </Typography>
            </Link>
            
            <Link href="/about" style={{textDecoration:'none'}}>
            <Typography
              style={{
                letterSpacing: 1,
                textTransform: "uppercase",
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 12,
                marginLeft: 30,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: pathname==="/about" ? 700:''
              }}
            >
              About
            </Typography>
            </Link>

            <Link href="/services" style={{textDecoration:'none'}}>
            <Typography
              style={{
                letterSpacing: 1,
                textTransform: "uppercase",
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 12,
                marginLeft: 30,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: pathname==="/services" ? 700:''
              }}
            >
              Services
            </Typography>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
