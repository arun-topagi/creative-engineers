import Slider from 'react-slick';
import { Typography } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as json from "../../json-data/jsonData.json";
import CardComponent from '../Card/CardComponent';

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
    <div style={{ margin: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', paddingTop: '1rem' }}>
      <Typography style={{ fontSize: '2.25rem', fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>{json.section4.header}</Typography>
      <Typography style={{ maxWidth: 530, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif' }}>{json.section4.paragraph}</Typography>
      <div style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Slider {...settings}>
          {json.section4.cards.map((card, index) => (
            <div key={index}>
              <CardComponent />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionThree;
