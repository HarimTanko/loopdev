import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Container = styled.div`
  padding: 0.2rem calc((100vw - 1300px) / 2);
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  line-height: 1.4;
  padding: 0rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    order: 2;

    span {
      display: none;
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 3rem);
    color: #548be3;

    @media screen and (max-width: 930px) {
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 6vw, 2rem);
    color: #548be3;

    @media screen and (max-width: 768px) {
      margin-bottom: 0.3rem;
    }
  }

  p {
    font-size: clamp(1rem, 6vw, 1.2rem);
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 0rem 2rem;
  display: flex;

  justify-content: center;
  align-items: center;
  order: 1;

  @media screen and (max-width: 768px) {
    // margin-top: 80px;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      height: 400px;
    }
  }
`;

const InfoSection = ({
  heading1,
  heading2,
  path,
  paragraphOne,
  paragraphTwo,

  imageOne,

  buttonLabel,
  reverse,
}) => {
  return (
    <div>
      <Section>
        <Container>
          <ColumnLeft reverse={reverse}>
            <h1>{heading1}</h1>
            <h3>{heading2}</h3>
            <p>{paragraphOne}</p>
            <span>
              <p>{paragraphTwo}</p>
            </span>
            <Button to={path} primary='true'>
              {buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <img src={imageOne} alt='lettings' />
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default InfoSection;
