import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navigation from './features/nav/Navigation';
import Hero from './features/hero/Hero';
import SkillSlider from './features/skills/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from './features/projects/ProjectCard';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <SkillSlider />
      <Project />
    </>
  );
};

export default App;
