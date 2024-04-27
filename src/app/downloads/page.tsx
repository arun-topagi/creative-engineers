"use client";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import React from "react";
import Underline from "@/components/Underline";
import companyLogo from "../../../public/section/hero.jpg";

import { Card } from "antd";
const { Meta } = Card;
import Image from "next/image";

function Index() {
  const { isMobile } = useScreenDetector();

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = "https://creativengineers.s3.ap-south-1.amazonaws.com/Company+Profile.pdf";
    link.download = "Company Profile.pdf"; // specify the filename
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        marginLeft: isMobile ? "15px" : "15vw",
        marginRight: isMobile ? "15px" : "15vw",
        marginTop: isMobile ? "20px" : "30px",
      }}
    >
      <Underline title="Downloads" />
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <Card
            onClick={onButtonClick}
            style={{
              width: 300,
              height: 300,
              borderRadius: 10,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
            }}
            cover={
              <Image
                src={companyLogo}
                alt="Logo"
                className="object-cover cursor-pointer"
                layout="intrinsic"
              />
            }
          >
            <Meta title="Company Profile" description="Click to download" />
          </Card>
      </div>
    </div>
  );
}

export default Index;
