import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { sliderData } from './data/sliderData';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={sliderData} />
    </>
  );
}

export default App;
