'use client';

import React from 'react';
import HeroSection from '@/components/Herosection';
import Sectiontwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import About from '@/components/About';


const Home = () => {
  return (
    <div style={{ padding: 0 }}>
      <HeroSection />
      <Sectiontwo />
      <SectionThree />
      <About />
    </div>
  );

};

export default Home;