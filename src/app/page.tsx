'use client';

import React from 'react';
import { Button, ConfigProvider, Typography } from 'antd';
import theme from '@/theme/themeConfig';

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Herosection';
import Sectiontwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import About from './about/page';
import { useScreenDetector } from '@/hooks/useScreenDetector';




const Home = () => {

  const { isMobile, isTablet, isDesktop } = useScreenDetector();

//   <ConfigProvider theme={theme}>
//   <div>
//     <Typography >Creative Engineering</Typography>
//     <Button type="primary">Button</Button>

//   </div>
// </ConfigProvider>

return (
  <div style={{padding:0}}>
    <HeroSection/>
    <Sectiontwo/>
    <SectionThree/>
    <About/>
  </div>
);

};

export default Home;