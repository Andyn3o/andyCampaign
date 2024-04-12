import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import Advocate from './components/Advocate';
import Policy from './components/PolicyIssue/Policy';
import Action from './components/Action';
import BottomSlogan from './components/BottomSlogan';
import Footer from './components/Footer';
import LatestEvents from './components/LatestEvent';

function App () {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Marquee />
      <Advocate />
      <LatestEvents />
      <Policy />
      <Action />
      <BottomSlogan />
      <Footer />
      <BottomNavigationBar />
    </>
  );
}

export default App;
