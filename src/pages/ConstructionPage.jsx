import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsGraphUp } from 'react-icons/bs';
import InvImage from '../images/InvestPageImg.jpg';

import { constructionData } from '../data/constructionData';

const Header = styled.div`
  position: relative;
  height: 40vh;
  margin-bottom: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 930px) {
    height: 20vh;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40vh;
  object-fit: cover;

  @media screen and (max-width: 930px) {
    height: 20vh;
  }

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const DevelopmentHeading = styled.h1`
  postion: relative;
  top: 0;
  left: 0;

  z-index: 20;
  font-size: 3rem;
  font-family: 'Paytone One', sans-serif;
  text-transform: uppercase;
  color: #fff;
  margin-left: 2rem;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`;
const MainContainer = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const DevelopmentContainer = styled(Link)`
  width: 100%;
  cursor: pointer;
  border: 0.5px solid #aad6fa;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  text-decoration: none;
  color: #000;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 400px;
  border: 0.5px solid #aad6fa;
`;

const DevelopmentImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageContent = styled.div`
  background: transparent;
  font-size: 5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 400px;

  opacity: 0;
  transition: 0.5s all ease-in-out;

  :hover {
    opacity: 1;
    background: rgba(58, 113, 201, 0.6);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 5rem 0.8rem;
  display: flex;

  flex-direction: column;

  color: #fff;

  span {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const DevelopmentTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
`;
const DevPrices = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
`;

const GraphIcon = styled(BsGraphUp)`
  font-size: 1.2rem;
  margin-left: 10px;
  color: #088036;
  font-weight: bold;
`;
const DevelopmentsPage = () => {
  return (
    <>
      <Header>
        <HeaderImage src={InvImage} />
        <DevelopmentHeading>Construction</DevelopmentHeading>
      </Header>

      <MainContainer>
        {constructionData.map((item, index) => (
          <DevelopmentContainer to={`/construction/${item.path}`} key={index}>
            <ImageContainer>
              <DevelopmentImage src={item.img} />

              <ImageContent>
                <TextContainer>
                  <DevelopmentTitle>{item.title1}</DevelopmentTitle>
                  <DevPrices>Project Type: {item.projectType}</DevPrices>
                  <DevPrices>Contract Value: £{item.contractValue}</DevPrices>
                  <DevPrices>
                    Warranty Provider: {item.warrantyProvider}
                  </DevPrices>
                  <DevPrices>Programme : {item.programme}</DevPrices>
                </TextContainer>
              </ImageContent>
            </ImageContainer>
          </DevelopmentContainer>
        ))}
      </MainContainer>
    </>
  );
};

export default DevelopmentsPage;
