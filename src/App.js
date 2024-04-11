import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import Advocate from './components/Advocate';
import LatestEvent from './components/LatestEvent';
import Policy from './components/Policy';
import Action from './components/Action';
import BottomSlogan from './components/BottomSlogan';
import Footer from './components/Footer';

function App () {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Marquee />
      <Advocate />
      <LatestEvent />
      <Policy />
      <Action />
      <BottomSlogan />
      <Footer />
      <BottomNavigationBar />
    </>
  );
}

export default App;
