import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { AiOutlineBars } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import MenuItems from './MenuItems';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: rgba(58, 113, 201, 0.6);
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-family: 'Paytone One', sans-serif;
  font-weight: 400;
  font-size: 32px;
`;

const MenuBars = styled(AiOutlineBars)`
  display: none;

  @media screen and (max-width: 933px) {
    display: block;
    font-size: 40px;
    color: #fff;
    background-size: contain;
    height: 40px
    width: 40px;
    cursor: pointer
    position: absolute;
    top:0;
    right: 0;
    margin-top: 12px;
    
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -48px;
  height: 100%;

  @media screen and (max-width: 933px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-size: 1.5rem;
  padding: 0.2rem 0;
  margin-bottom: 0.2rem;

  &:hover {
    color: #000;
    transition: 0.3s all ease-in-out;
    transform: translateY(-4px);
  }
`;

const SubList = styled(Link)`
background: none
border: none;
text-decoration: none;
color:#fff;
font-family: inherit;
font-size: 1.2rem;
cursor: pointer;



`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 933px) {
    display: none;
  }
`;

const Navbar = ({ toggle, isOpen }) => {
  const [drop, setDrop] = useState(false);
  const [dropLet, setDropLet] = useState(false);

  const navi = () => {
    setDrop(!drop);
  };

  const toggleLet = () => {
    setDropLet(!dropLet);
  };

  return (
    <Nav>
      <Logo to='/'>Loop</Logo>
      <MenuBars onClick={toggle}>
        <IconContext.Provider>
          <AiOutlineBars />
        </IconContext.Provider>
      </MenuBars>

      <NavMenu>
        <MenuItems link={'/'} label={'Home'} />

        <MenuItems link={'/invest'} label={'Investors'} />
        <MenuItems
          dropdownContent={
            <>
              <NavMenuLinks to='/westend'>westend</NavMenuLinks>
              <NavMenuLinks to='/upham'>upham</NavMenuLinks>
              <NavMenuLinks to='/lee'>lee</NavMenuLinks>
              <NavMenuLinks to='/btopm'>btopm</NavMenuLinks>
            </>
          }
          link={'/developments'}
          label={'Developments'}
        />
        <MenuItems
          dropdownContent={
            <>
              <NavMenuLinks to='/westend'>westend</NavMenuLinks>
              <NavMenuLinks to='/upham'>upham</NavMenuLinks>
              <NavMenuLinks to='/lee'>lee</NavMenuLinks>
              <NavMenuLinks to='/btopm'>btopm</NavMenuLinks>
            </>
          }
          link={'lettings'}
          label={'Lettings'}
        />
        <MenuItems
          dropdownContent={
            <>
              <NavMenuLinks to='/westend'>westend</NavMenuLinks>
              <NavMenuLinks to='/upham'>upham</NavMenuLinks>
              <NavMenuLinks to='/lee'>lee</NavMenuLinks>
              <NavMenuLinks to='/btopm'>btopm</NavMenuLinks>
            </>
          }
          link={'/construction'}
          label={'Construction'}
        />
        <MenuItems link={'/about'} label={'About'} />
      </NavMenu>

      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
