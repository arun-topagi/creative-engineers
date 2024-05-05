"use client";
import Underline from "@/components/Underline";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { Tabs, Typography } from "antd";
import React from "react";
import BMV60Image from "../../../public/machines/BMV60.png";
import J300Image from "../../../public/machines/J300.png";
import latheImage from "../../../public/machines/lathemachines.png";
import BFWImage from "../../../public/machines/BFW.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface IMACHINESS {
  [key: string]: StaticImageData;
}

const MACHINES: IMACHINESS = {
  BMV60Image: BMV60Image,
  latheImage: latheImage,
  J300Image: J300Image,
  BFWImage: BFWImage,
};

const { Title, Paragraph } = Typography;
const Card = ({
  src,
  name,
  descriptions,
}: {
  src: Array<string>;
  name: string;
  descriptions: Array<any>;
}) => {
  const { isMobile } = useScreenDetector();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Title level={4} style={{ marginTop: 5 }}>
          {name}
        </Title>
      </div>
      <div style={{ display: "flex", justifyContent: isMobile ? "flex-start": "space-around", flexDirection: isMobile ? 'column' : 'row' }}>
        {src.map((image: string, index) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={MACHINES[image]}
                alt="Logo"
                height={270}
                width={375}
                style={{height: "270px", width: isMobile ? '305px' : "375px"}}
              />
            <div style={{ marginTop: "10px" }}>
              {descriptions?.[index]?.map((descript) => {
                return (
                  <Paragraph key={index} style={{ marginBottom: "5px" }}>
                    {descript}
                  </Paragraph>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    label: `Vertical Milling Centre`,
    key: "1",
    children: (
      <Card
        src={["BMV60Image"]}
        name={"BFW BMV Chakra 60+"}
        descriptions={[
          [
            "Table Size = 1250 x 600 mm",
            "Max. Load on table std. = 1200 Kgs",
            "Accuracy as per ISO 230-2",
            "  1) Positioning = 0.016 mm",
            "  2) Repeatability = 0.012 mm",
          ],
        ]}
      />
    ),
    style: {
      fontSize: 18,
    },
  },
  {
    label: `CNC Turning Machines`,
    key: "2",
    children: (
      <Card
        src={["J300Image", "BFWImage"]}
        name="Ace Jobber J 300 & BFW BVL 550H with Chip Conveyor"
        descriptions={[
          [
            "Maximum Turning Diameter = 320 mm",
            "Maximum Turning Length = 300 mm",
            "8 Station Electro-Mechanical Turret",
          ],
          [
            "Maximum Turning Diameter = 550 mm",
            "Maximum Turning Length = 500 mm",
            "12 Stations Hydraulic Turret",
          ],
        ]}
      />
    ),
  },
  {
    label: `Lathe Machines`,
    key: "3",
    children: (
      <Card
        src={["latheImage"]}
        name="Precision heavy Duty Lathe Machines"
        descriptions={[]}
      />
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
          style={{ fontSize: "1rem", fontWeight: 500 }}
        />
      </div>
      <br />
    </div>
  );
}

export default Index;
