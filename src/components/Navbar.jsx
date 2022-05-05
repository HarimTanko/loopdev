import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { AiOutlineBars } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import NavDrop from './NavDrop';

import { menuData } from '../data/menuData';

import { devData } from '../data/devData';

import { useDispatch, useSelector } from 'react-redux';

import { menuToggle, menuClose } from '../app/slices/uiSlice';
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

const LinkContainer = styled.div`
  position: relative;
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

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to='/'>Loop</Logo>
      <MenuBars onClick={toggle}>
        <IconContext.Provider>
          <AiOutlineBars />
        </IconContext.Provider>
      </MenuBars>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='#' primary='true'>
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
