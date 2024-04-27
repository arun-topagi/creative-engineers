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
        marginTop: isMobile ? "20px" : "30px"
      }}
    >
    <Underline title="Quality Assurance" />
    <Typography>Coming Soon</Typography>
    </div>
  );
}

export default Index;
