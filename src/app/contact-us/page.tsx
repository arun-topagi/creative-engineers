"use client";
import About from "@/components/AboutV2";
import Underline from "@/components/Underline";
import React from "react";

function Index() {
  return (
    <div className="page-container" style={{ paddingBottom: "1rem" }}>
      <Underline title="Contact Us" />
      <About />
    </div>
  );
}

export default Index;

