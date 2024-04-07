'use client';

import React from 'react';
import HeroSection from '@/components/Herosection';
import Sectiontwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import About from '@/components/AboutV2';
import Banner from "@/components/banner";

const Home = () => {
  return (
    <div style={{ padding: 0 }}>
      <HeroSection />
      <Sectiontwo />
      <SectionThree />
      <About />
      <Banner />
    </div>
  );

};

export default Home;