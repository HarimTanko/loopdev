import React from 'react';
import styled from 'styled-components';
import paul from '../images/Paul.webp';
import InvImage from '../images/InvestPageImg.jpg';

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;
const Header = styled.div`
  position: relative;
  height: 20vh;
  margin-bottom: 5rem;
  display: flex;
  justify-content: start;

  align-items: end;

  @media screen and (max-width: 930px) {
    height: 25vh;
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
  height: 25vh;
  object-fit: cover;

  @media screen and (max-width: 930px) {
    height: 20vh;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
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
const Section = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const AboutImage = styled.img`
  width: 400px;
  float: right;
  margin: 3rem 2rem 1rem;

  @media screen and (max-width: 600px) {
    margin: 3rem auto 1rem;
    width: 90%;
    float: none;
  }
`;
const AboutCaption = styled.p`
  position: absolute;
  top: 1;
  right: 3.4rem;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.8rem;
  color: #548be3;
  margin: 5px 0;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    top: 5px;
    right: 7rem;
  }
`;
const InfoContainer = styled.div`
  height: 100%;

  padding: 22.5px 45px;
  margin: 1rem 1rem 5rem;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 713px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0 10px;
    margin: auto;
  }
`;
const AboutInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Header>
        <HeaderImage src={InvImage} />
        <DevelopmentHeading>About Us</DevelopmentHeading>
      </Header>

      <Section>
        <InfoContainer>
          <ImageContainer>
            <AboutImage src={paul} />
            <AboutCaption>Paul - Managing Director</AboutCaption>
          </ImageContainer>
          <AboutInfo>
            Developments, Lettings and Management Contracting are the three
            disciplines that Loop is proficient in and at the same time these
            are linked and support each other. They are interdependent on the
            strengths each brings to Loop as a whole.
          </AboutInfo>
          <AboutInfo>
            Paul has always been at the centre of each business and has
            extensive knowledge and experience in each area as well as an
            interesting and varied approach to the property market.
          </AboutInfo>
          <AboutInfo>
            I have been in and around construction management and property all
            of my working life, since the age of 17. My apprenticeship involved
            working in various disciplines(management, surveying, buying and
            planning) before spending a number of years on a construction
            management path as a project manager. The diversity I received
            during my training period and the following 29 years mean that I
            have experienced and seen a lot. Concrete framed buildings with
            tower cranes, copper roofing, house building, basement conversions
            and underpinning.
          </AboutInfo>
          <AboutInfo>
            I took the traditional career path between 1990 to 2002 working for
            companies such as Norwest Holst, Feltham Construction & Mansell.
          </AboutInfo>

          <AboutInfo>
            By 2004 I had decided that I wanted to start my own Management
            Contracting business and I formed Loop Construction Services Ltd. By
            2010 the company had 10 employees(managers, surveyors, a buyer &
            administration). Projects included residential extensions,
            refurbishments as well as multi-unit new housing developments for
            clients. Loop Construction completed many types of projects for
            architects and developers and also received commendation awards from
            St Albans Civic Society in 2010 & 2013 (click to read more).
          </AboutInfo>

          <AboutInfo>
            Loop Lettings Ltd has been growing and adding properties to the
            portfolio I started in 2003. Today it manages 12 BTL properties and
            these assets continue to grow year on year and add positive cashflow
            to the businesses. Today we attract investors to the business which
            helps us to do more of what we are great at.
          </AboutInfo>

          <AboutInfo>
            If you would like to know more about me and the things Loop are
            doing, then you should get in contact.
          </AboutInfo>
        </InfoContainer>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;
