import React from 'react';
import { styled } from 'styled-components';
import glowingAnimation from '../animations/GlowingText';

const Social = () => (
  <SocialWrap className="d-flex flex-column gap-4 mt-5">
    <i className="fa-brands fa-github" />
    <i className="fa-brands fa-linkedin" />
    <i className="fa-brands fa-angellist" />
    <i className="fa-brands fa-twitter" />
    <i className="fa-brands fa-medium" />
    <i className="fa-brands fa-envelop" />
  </SocialWrap>
);

const SocialWrap = styled.div`
  i {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    font-size: 1.5rem;
    animation: ${glowingAnimation} 2s infinite;
  }
`;

export default Social;
