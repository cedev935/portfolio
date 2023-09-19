/* eslint-disable */

import React from 'react';
import { styled } from 'styled-components';
import { glowingAnimation } from '../animations/GlowingText';

const Social = () => (
  <SocialWrap className="d-flex flex-column gap-4 mt-5">
    <a data-aos="fade-up" data-aos-duration="1000" href="http://www.github.com/cedev935" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" /></a>
    <a data-aos="fade-up" data-aos-duration="2500" href="cedev935@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope" /></a>
  </SocialWrap>
);

const SocialWrap = styled.div`
  a {
    color: inherit;
    border-radius: 50%;
    display: grid;
    place-items: center;
    &:hover {
        color: black;
        background-color: #c3b0ec;
        transition: all 1s;
    }
  }

  i {
    font-size: 1.5rem;
    border-radius: 50%;
    animation: ${glowingAnimation} 2s infinite;
  }
`;

export default Social;
