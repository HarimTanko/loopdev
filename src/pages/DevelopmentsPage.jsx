import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { developmentsData } from '../data/developmentsData';
import Development from '../components/Development';

const HeadingContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DevelopmentHeading = styled.h1`
  font-size: 3rem;
  font-family: 'Paytone One', sans-serif;
  text-transform: uppercase;
  color: #548be3;
`;
const MainContainer = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
  margin-bottom: 4rem;
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
  height: 400px;
  border: 0.5px solid #aad6fa;
`;

const DevelopmentImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 1rem 0.8rem;

  color: #548be3;
`;
const DevelopmentTitle = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1.5rem 0;
`;
const DevelopmentROI = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const DevelopmentsPage = () => {
  const id = useParams();

  return (
    <>
      <HeadingContainer>
        <DevelopmentHeading>Our Developments</DevelopmentHeading>
      </HeadingContainer>

      <MainContainer>
        {developmentsData.map((item, index) => (
          <DevelopmentContainer to={`/developments/${item.path}`} key={index}>
            <ImageContainer>
              <DevelopmentImage src={item.img} />
            </ImageContainer>
            <TextContainer>
              <DevelopmentTitle>{item.title1}</DevelopmentTitle>
              <DevelopmentROI>ROI: {item.ROI}</DevelopmentROI>
            </TextContainer>
          </DevelopmentContainer>
          //   <Development key={index} id={id} item={item} />
        ))}
      </MainContainer>
    </>
  );
};

export default DevelopmentsPage;
