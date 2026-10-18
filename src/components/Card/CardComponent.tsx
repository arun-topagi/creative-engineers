import React from "react";
import { Card, Image, Typography } from "antd";
import json from "../../json-data/jsonData.json";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import "../SectionThree/SectionThree.css";

function CardComponent(props: any) {
  const { card = json.section4.cards[0] } = props;
  const { isDesktop } = useScreenDetector();
  return (
    <Card
      className="surface-card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        padding: 12,
        maxWidth: "420px",
        marginLeft: isDesktop ? "1rem" : "",
      }}
    >
      <Typography
        style={{
          marginBottom: "1.75rem",
          fontFamily: "Montserrat, sans-serif",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
        }}
      >
        {card.paragraph}
      </Typography>
      <div style={{ display: "flex", alignItems: "center", alignSelf: "stretch" }}>
        <Image
          alt={card.name}
          src="https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg"
          style={{
            width: "3.5rem",
            height: "3.5rem",
            objectFit: "cover",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              marginTop: "0.5rem",
              fontWeight: 600,
              marginBottom: 2,
              lineHeight: "1.6rem",
              color: "var(--text-primary)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {card.name}
          </h3>
          <div
            style={{
              fontSize: "0.78rem",
              lineHeight: "1.1rem",
              marginBottom: "0.5rem",
              color: "var(--text-muted)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {card.position}
          </div>
        </div>
        <div style={{ flex: 1, justifyContent: "flex-end", display: "flex" }}>
          <Image
            alt="Quote"
            src="https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a6c9412aae6_double-quotes-l.svg"
          />
        </div>
      </div>
    </Card>
  );
}

export default CardComponent;

