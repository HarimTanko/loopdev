import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Development = ({ item }) => {
  return (
    <DevelopmentContainer to={item.path}>
      {console.log(item.path)}
      <ImageContainer>
        <DevelopmentImage src={item.img} />
      </ImageContainer>

      <TextContainer>
        <DevelopmentTitle>{item.DevelopmentContainertitle1}</DevelopmentTitle>
        <DevelopmentROI>ROI: {item.ROI}</DevelopmentROI>
      </TextContainer>
    </DevelopmentContainer>
  );
};

export default Development;
