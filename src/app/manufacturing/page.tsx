"use client";
import Underline from "@/components/Underline";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Tabs, Typography } from "antd";
import React from "react";
import BMV60Image from "../../../public/machines/BMV60.png";
import J300Image from "../../../public/machines/J300.png";
import latheImage from "../../../public/machines/lathemachines.png";
import BFWImage from "../../../public/machines/BFW.jpg";
import BFW_Neo_20Image from "../../../public/machines/BFW_Neo_205.webp";
import grinding_machineImage from "../../../public/machines/grinding_machine.png";
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
  BFW_Neo_20Image: BFW_Neo_20Image,
  grinding_machineImage: grinding_machineImage,
};

const { Title, Paragraph } = Typography;

const Card = ({
  src,
  name,
  descriptions,
}: {
  src: Array<string>;
  name: string[];
  descriptions: Array<any>;
}) => {
  const { isMobile } = useScreenDetector();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fill, minmax(360px, 1fr))",
        gap: "1.75rem",
        paddingLeft: isMobile ? 0 : "0.75rem",
      }}
    >
      {src.map((image: string, index) => {
        const specs: string[] = descriptions?.[index] || [];
        return (
          <div
            key={`${index}-${image}`}
            className="surface-card surface-card-hover"
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderTop: "4px solid var(--brand-navy)",
            }}
          >
            {/* Card Header */}
            <div
              style={{
                padding: "1.15rem 1.5rem",
                borderBottom: "1px solid var(--border-subtle)",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {name[index]}
              </Title>
            </div>

            {/* Neutral Image Stage */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "280px",
                borderBottom:
                  specs.length > 0 ? "1px solid var(--border-subtle)" : "none",
              }}
            >
              <Image
                src={MACHINES[image]}
                alt={name[index] || "Machine"}
                height={240}
                width={350}
                style={{
                  maxHeight: "240px",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Specifications List */}
            {specs.length > 0 && (
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "var(--surface-muted)",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {specs.map((descript: string, specIndex: number) => (
                  <div
                    key={specIndex}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      paddingBottom:
                        specIndex < specs.length - 1 ? "0.5rem" : 0,
                      borderBottom:
                        specIndex < specs.length - 1
                          ? "1px dashed var(--border-subtle)"
                          : "none",
                    }}
                  >
                    <CheckCircleOutlined
                      style={{
                        color: "var(--brand-navy)",
                        fontSize: "0.9rem",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    />
                    <Paragraph
                      style={{
                        margin: 0,
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {descript}
                    </Paragraph>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
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
        name={["BFW BMV Chakra 60+"]}
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
  },
  {
    label: `CNC Turning Machines`,
    key: "2",
    children: (
      <Card
        src={["BFW_Neo_20Image", "J300Image"]}
        name={["BFW Neo 2050", "Ace Jobber J 300"]}
        descriptions={[
          [
            "Swing over bed\t = 500 mm",
            "Maximum Turning Diameter = 330 mm",
            "Maximum Turning Length = 550 mm",
            "Precision LM guides for X & Z axes",
            "Accuracy as per ISO 230 – 2",
          ],
          [
            "Maximum Turning Diameter = 320 mm",
            "Maximum Turning Length = 300 mm",
            "8 Station Electro-Mechanical Turret",
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
        name={["Precision heavy Duty Lathe Machines"]}
        descriptions={[]}
      />
    ),
  },
  {
    label: `Other Machines`,
    key: "4",
    children: (
      <Card
        src={["grinding_machineImage"]}
        name={["Grinding Machine"]}
        descriptions={[]}
      />
    ),
  },
];

function Index() {
  const { isMobile } = useScreenDetector();

  return (
    <div className="page-container">
      <Underline title="MANUFACTURING FACILITIES" />

      <div
        style={{
          marginTop: "1rem",
          padding: isMobile ? "1.15rem 1.25rem" : "1.35rem 1.75rem",
          backgroundColor: "var(--surface-muted)",
          borderLeft: "4px solid var(--brand-red)",
          borderRadius: "0 12px 12px 0",
          borderTop: "1px solid var(--border-subtle)",
          borderRight: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Typography
          style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.7,
            fontWeight: 500,
            color: "var(--text-secondary)",
            fontFamily: "Montserrat, sans-serif",
            fontStyle: "italic",
          }}
        >
          &quot;After exploring the capabilities of these machines, remember
          that our offerings extend far beyond. With a diverse range of
          solutions, we&#39;re your one-stop destination for all your machining
          needs.&quot;
        </Typography>
      </div>

      <div
        className="surface-card"
        style={{
          marginTop: "2.25rem",
          padding: isMobile ? "1.25rem 1rem" : "2rem 1.75rem",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          tabPosition={isMobile ? "top" : "left"}
          items={items}
          style={{ fontSize: "1rem", fontWeight: 600 }}
        />
      </div>
    </div>
  );
}

export default Index;

