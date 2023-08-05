import { keyframes } from 'styled-components';

const glowingAnimation = keyframes`
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

export default glowingAnimation;
