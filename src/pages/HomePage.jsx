import React from 'react';

import { sliderData } from '../data/sliderData';

import InfoSection from '../components/InfoSection';
import Hero from '../components/Hero';

import { InfoData, InfoData2, InfoData3, InfoData4 } from '../data/infoData';

const HomePage = () => {
  return (
    <div>
      <Hero slides={sliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoData2} />
      <InfoSection {...InfoData3} />
      <InfoSection {...InfoData4} />
    </div>
  );
};

export default HomePage;
