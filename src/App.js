import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import Advocate from './components/Advocate';
import LatestEvent from './components/LatestEvent';

function App () {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Marquee />
      <Advocate />
      <LatestEvent />
    </>
  );
}

export default App;
