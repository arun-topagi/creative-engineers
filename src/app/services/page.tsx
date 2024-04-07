"use client";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import React, { useState } from "react";
import About from "@/components/AboutV2";
import { Typography } from "antd";

function Index() {
  const { isMobile } = useScreenDetector();
  return (
    <div
      style={{
        marginLeft: isMobile ? "15px" : "20vw",
        marginRight: isMobile ? "15px" : "20vw",
        marginTop: isMobile ? "20px" : "30px"
      }}
    >
        Sevices
    </div>
  );
}

export default Index;
