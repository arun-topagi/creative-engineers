"use client";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import React, { useState } from "react";
import About from "@/components/AboutV2";
import { Typography } from "antd";
import Banner from "@/components/banner";
import Underline from "@/components/Underline";

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
      <Underline title="About Company" />
      <Typography
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
           We introduce ourselves as &quot;Creative Engineers&quot; -a precision engineering component manufacturer as well as sub-assembly 
solution provider. The company was established in the year 2022 with the aim of delivering precise machined parts 
        </Typography>
        <br />
        <br />
        <Typography
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
            In accordance to the ISO 9001:2015 standard, all of our products are made with precise skills and competence, along with maintenance of all 
kinds of reports and documentation as per the standard. Every component is inspected and validated step-by-step before moving on to 
subsequent operations. 
        </Typography>
        <Typography
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
            We believe having a fundamental set of values—commitment, reliability, accountability, and integrity—is essential to maintaining a positive 
work environment, which is essential to ensuring the continued success of the company. Together with having a common set of principles, 
our team members are experienced, focused, and equipped with technical skills to produce goods of the finest quality.
        </Typography>
         
     <About />
    </div>
  );
}

export default Index;
