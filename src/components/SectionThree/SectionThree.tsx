import Slider from "react-slick";
import { Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import json from "../../json-data/jsonData.json";
import CardComponent from "../Card/CardComponent";

const SectionThree = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!json.section4?.show) {
    return null;
  }

  return (
    <section
      style={{
        margin: "auto",
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "3.5rem 1.5rem",
      }}
    >
      <Typography
        style={{
          fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          color: "var(--text-primary)",
        }}
      >
        {json.section4.header}
      </Typography>
      <Typography
        style={{
          maxWidth: 560,
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "1rem",
          color: "var(--text-secondary)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {json.section4.paragraph}
      </Typography>
      <div style={{ width: "85%" }}>
        <Slider {...settings}>
          {json?.section4?.cards.map((card, index) => (
            <div key={index} style={{ padding: "0.5rem" }}>
              <CardComponent card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionThree;

