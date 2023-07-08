import React from 'react';
import { styled } from 'styled-components';

const Desktop = () => (
  <Wrap>
    <a href="#about"><li>About</li></a>
    <a href="#projects"><li>Projects</li></a>
    <a href="#contact"><li>Contact</li></a>
  </Wrap>
);

const Wrap = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-around;
  list-style-type:  none;
`;

export default Desktop;
