import { keyframes } from 'styled-components';

export const glowingAnimation = keyframes`
  0% {
    opacity: 1;
    box-shadow: 0 0 10px #ac89f6;
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 20px #ac89f6;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 10px #ac89f6;
  }
`;

export const glowingText = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }

`;

export const glowingBackground = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
`;
