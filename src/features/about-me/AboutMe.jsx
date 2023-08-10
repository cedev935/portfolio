import React from 'react';
import { styled } from 'styled-components';
import Title from '../../Title';
import adarsh from '../../media/metro.png';
import { violetGradient } from '../animations/StyleVars';
import resume from '../../media/resume.docx';
import Contact from './Contact';
// import video from '../../media/video.mp4';

const AboutMe = () => (
  <AboutMeWrapper className="about-me pt-5" data-aos="fade-up" data-aos-duration="1500">
    <Title title="About Me" />
    <div className="banner" />
    <div className="d-flex justify-content-between mx-auto w-75 about text-light" data-aos="flip-right">
      <div className="collapsed w-50">
        <h3 className="card-header ps-0 fs-2">Full Stack Developer</h3>
        <p className="card-description fs-5">
          Junior software engineer passionate about developing innovative programs that
          expedite the
          efficiency and effectiveness of organizational success.
          Knowledgeable in technology and writing code to create systems that are
          reliable and user-friendly.
          Skilled mentor with the proven ability to motivate, educate, and manage
          a team of 5+ developers to build software programs
          and effectively track changes.
        </p>
        <div className="d-flex gap-2 mb-3">
          <span className="badge bg-info text-dark">React</span>
          <span className="badge bg-info text-dark">ROR</span>
          <span className="badge bg-info text-dark">Mentor</span>
          <span className="badge bg-info text-dark">Team player</span>
        </div>
        <a href={resume} download="Adarsh-Pathak-Resume" className="btn btn-primary">My Resume</a>
      </div>
      <img src={adarsh} alt="adarsh" />
    </div>
    <Contact />
  </AboutMeWrapper>
);

const AboutMeWrapper = styled.section`
  position: relative;
  .banner {
    height: 100vh;
    width: 100%;
    ${violetGradient}
    position: absolute;
    top: 0;
    z-index: 0;
  }
  h3 {
    position: relative;
    z-index: 1;
  }

  .about {
    position: relative;
    z-index: 1;
  }

  img {
    position: relative;
    transform: rotateY(-30deg);
    filter: drop-shadow(150px 3px purple) sepia(50%) drop-shadow(-3px -3px purple);
    right: 0;
    top: 50%;
  }
`;

export default AboutMe;
