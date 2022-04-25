import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Button } from './Button';
import { AiOutlineBars } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 933px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-size: 18px;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 933px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>Loop</Logo>
      <MenuBars>
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
