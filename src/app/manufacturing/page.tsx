"use client";
import Underline from "@/components/Underline";
import Logo from "@/components/logo/Logo";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { Tabs, Typography } from "antd";
import React from "react";
import BMV60Image from "../../../public/machines/BMV60.png";
import J300Image from "../../../public/machines/J300.png";
import latheImage from "../../../public/machines/lathemachines.png";
import BFWImage from "../../../public/machines/BFW.jpg";
import { StaticImageData } from "next/image";

interface IMACHINESS {
  [key: string]: StaticImageData
}

const MACHINES: IMACHINESS = {
  BMV60Image: BMV60Image,
  latheImage: latheImage,
  J300Image: J300Image,
  BFWImage: BFWImage,
};

const { Title } = Typography;
const Card = ({ src, name }: { src: Array<string>; name: string }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Title level={4} style={{ marginTop: 5 }}>
          {name}
        </Title>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {src.map((image: string, index) => (
          <Logo
            key={index}
            src={MACHINES[image]}
            height={270}
            width={350}
          />
        ))}
      </div>
    </div>
  );
};
const items = [
  {
    label: `Vertical Milling Centre`,
    key: 1,
    children: <Card src={["BMV60Image"]} name={"BFW BMV Chakra 60+"} />,
    style: {
      fontSize: 18,
    },
  },
  {
    label: `CNC Turning Machines`,
    key: 2,
    children: (
      <Card
        src={["J300Image", "BFWImage"]}
        name="Ace Jobber J 300 & BFW BVL 550H with Chip Conveyor"
      />
    ),
  },
  {
    label: `Lathe Machines`,
    key: 3,
    children: (
      <Card src={["latheImage"]} name="Precision heavy Duty Lathe Machines" />
    ),
  },
];

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
      <div style={{ marginTop: "30px" }}>
        <Tabs
          defaultActiveKey="1"
          tabPosition={isMobile ? "top" : "left"}
          items={items}
        />
      </div>
      <br />
    </div>
  );
}

export default Index;
