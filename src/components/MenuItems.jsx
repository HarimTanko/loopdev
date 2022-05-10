import React from 'react';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const SubMenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  background-color: #548be3;
  padding: 0 0.8rem;
  display: none;
`;

const NavDropDown = styled.div`
  position: relative;
  height: 100%;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  position: relative;
  font-size: 18px;
`;

const MenuItems = ({ dropdownContent, navi, label, link }) => {
  // const { menuOpen } = useSelector((state) => state.toggle);

  // const dispatch = useDispatch();

  // const menuToggleHandler = (label) => {
  //   dispatch(menuToggle());
  // };

  // const menuCloseToggler = () => {
  //   dispatch(menuClose());
  // };

  // const [openDropDown, setOpenDropDown] = useState(null);

  // const openDropDownHandler = (label) => {
  //   if (label === openDropDown) return setOpenDropDown(null);
  //   setOpenDropDown(label);
  // };

  return (
    // <NavDropDown
    //   key={items.key}
    //   onClick={() => openDropDownHandler(items.title)}
    // >
    //   {items.submenu ? (
    //     <>
    //       <NavMenuLinks to={items.link}>{items.title}</NavMenuLinks>
    //       <NavDrop devData={items.submenu} />
    //     </>
    //   ) : (
    //     <NavMenuLinks to={items.link}>{items.title}</NavMenuLinks>
    //   )}
    // </NavDropDown>
    <NavDropDown>
      <NavMenuLinks to={link}>{label}</NavMenuLinks>

      <SubMenuContainer>{dropdownContent}</SubMenuContainer>
    </NavDropDown>
  );
};

export default MenuItems;
