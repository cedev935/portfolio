import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navigation from './features/nav/Navigation';
import Hero from './features/hero/Hero';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
    </>

  );
};

export default App;
