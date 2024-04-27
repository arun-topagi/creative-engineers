"use client";
import About from "@/components/AboutV2";
import Underline from "@/components/Underline";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { Typography } from "antd";
import React from "react";

function Index() {
  const { isMobile } = useScreenDetector();
  return (
    <div
      style={{
        marginLeft: isMobile ? "15px" : "15vw",
        marginRight: isMobile ? "15px" : "15vw",
        marginTop: isMobile ? "20px" : "30px",
      }}
    >
      <Underline title="MANUFACTURING FACILITIES" />
      <Typography
        style={{
          marginTop: "10px",
          fontSize: "1.2rem",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        &quot;After exploring the capabilities of these machines, remember that
        our offerings extend far beyond. With a diverse range of solutions,
        we&#39;re your one-stop destination for all your machining needs.&quot;
      </Typography>
      <br />
    </div>
  );
}

export default Index;
