import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arcWeldingMachine from '../../../public/machines/arcWeldingMachine.jpg'
import bfwXtron from '../../../public/machines/bfw_xtron_755.jpg'
import cncAceJ from '../../../public/machines/CNC_ACE_J_300_LM.jpg'
import CNCACELT2 from '../../../public/machines/CNC_ACE_LT2_LM_1500.jpg'
import precision from '../../../public/machines/precisionLath.jpeg'
import radialDrill from '../../../public/machines/radialDrillMachine.jpg'

const imagesData = [
    {
        id:'1',
        src: arcWeldingMachine,
        alt: 'arcWeldingMachine'
    },
    {
        id:'2',
        src: bfwXtron,
        alt: 'bfw_xtroin'
    },
    {
        id:'3',
        src: cncAceJ,
        alt: 'CNCACE'
    },
    {
        id:'4',
        src: CNCACELT2,
        alt: 'CNCACEL2'
    },
    {
        id:'5',
        src: precision,
        alt: 'precision'
    },
    {
        id:'6',
        src: radialDrill,
        alt: 'radialDrill'
    }
]

const Service = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imagesData.map((data, index) => (
          <div style={{backgroundColor:'white', height:'400px', maxWidth:'650px', backgroundClip:'red'}} key={data.id}>
            <Image
            src={data.src}
            alt={data.alt}
            className="object-cover cursor-pointer"
            height={400}
            // width={900}
            layout="intrinsic"
          />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Service;
