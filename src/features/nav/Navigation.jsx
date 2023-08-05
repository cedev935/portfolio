import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Turn as Hamburger } from 'hamburger-react';
import logo from '../../media/adarsh-logo.png';
import MobileMenu from './MobileMenu';
import Desktop from './Desktop';
import glowingAnimation from '../Animations/GlowingText';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <NavWrap>
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
      </div>

      {width <= 768 ? (
        <>
          {' '}
          <Hamburger direction="left" toggled={isOpen} toggle={setOpen} duration={1} />
          <MobileMenu open={isOpen} onClick={setOpen} />
        </>
      ) : <Desktop />}
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  .logo-wrap {
    width: 50px;
    display: grid;
    place-items: center;
    img {
      width: 100%;
      border-radius: 50%;
      animation: ${glowingAnimation} 2s infinite;
    }
  }
  .hamburger-react {
    position: relative;
    z-index: 5;
  }

  @media screen and (min-width: 768px) {
    padding: 0.5rem 3rem;
  }
`;

export default Navigation;
