// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import '../../src/App.css';

// const NavDropWrapper = styled.div`
//   display: none;
// `;

// const NavDropContainer = styled.div`
//   position: relative;
//   top: 15px;
//   width: 100%;
//   left: 0;
//   margin-left: 7px;

//   background: #3a71c9;
//   transition: 0.3s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   //  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
// `;
// const DropLink = styled(Link)`
//   display: flex;
//   align-items: start;
//   justify-content: center;
//   color: #fff;
//   font-size: 1.2rem;
//   text-decoration: none;
//   list-style: none;
//   color: #fff;
//   cursor: pointer;
//   transition: 0.2 ease-in-out;
//   border-bottom: 1px solid #fff;
//   height: 1.8rem;
//   padding: 5px 10px;

//   &:hover {
//     color: #00294a;
//   }
// `;

// const NavDrop = ({ devData }) => {
//   return (
//     <>
//       {console.log(devData)}
//       <NavDropWrapper>
//         <NavDropContainer>
//           {devData.map((item, index) => (
//             <DropLink to={item.path} key={index}>
//               {item.title}
//             </DropLink>
//           ))}
//         </NavDropContainer>
//       </NavDropWrapper>
//     </>
//   );
// };

// export default NavDrop;
