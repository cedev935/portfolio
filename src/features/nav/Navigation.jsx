import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Turn as Hamburger } from 'hamburger-react';
import logo from '../../media/adarsh-logo.png';
import MobileMenu from './MobileMenu';
import Desktop from './Desktop';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  console.log(isOpen);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <NavWrap>
      <div>
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
  .hamburger-react {
    position: relative;
    z-index: 5;
  }
`;

export default Navigation;
