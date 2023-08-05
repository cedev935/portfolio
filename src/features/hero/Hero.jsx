import React from 'react';
import { styled } from 'styled-components';
import { violetGradient } from '../animations/StyleVars';
import Social from './Social';

const Hero = () => (
  <HeroWrapper className="hero" data-aos="fade-down">
    <div className="text-hero d-flex gap-4">
      <Social />
      <div className="flex flex-direction-column justify-content-center align-items-center">
        <div className="circle" />
        <div className="line" />
      </div>
      <div className="text">
        <h1 className="text-light mt-4">
          Hi I&apos;m
          {' '}
          <span>Adarsh</span>
        </h1>
        <p>
          I am Saiyan From Planet
          {' '}
          <b>Full-Stack</b>
        </p>
        <p>Each Coding Fight makes me stronger than before</p>
      </div>
    </div>
  </HeroWrapper>
);

const HeroWrapper = styled.section`
  .text-hero {
    width: 50%;
    padding-top: 10rem;
    margin-left: 20%;
    span,
    b {
      color: #9153ff;
    }

    h1 {
      font-size: 5rem;
      font-weight: 700;
    }

    p {
      font-size: 2rem;
    }

  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #c3b0ec;
    margin: auto;
  }

  .line {
    width: 5px;
    height: 50vh;
    margin: auto;
    background: ${violetGradient};
  }

  @media screen and (max-width: 769px) {
    .text-hero {
      margin-left: 10%;
      width: 80%;
      h1 {
        font-size: 4.5rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 426px) {
    .text-hero {
      width: 80%;
      margin-left: 5%;
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.4rem;
      }
    }

    .line {
      height: 70vh;
    }
  }
`;

export default Hero;
