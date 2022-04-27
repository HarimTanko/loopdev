import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  


  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 3rem);
   
  }

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 6vw, 2rem);

}
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 1.2rem);
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;

  justify-content: center;
  align-items: center;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  @media screen and (max-width: 768px) {
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading1,
  heading2,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  imageOne,
  ImageTwo,
  ImageThree,
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
            <p>{paragraphTwo}</p>
            <Button to='/lettings' primary='true'>
              {buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={imageOne} alt='lettings' />
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default InfoSection;
