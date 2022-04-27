import React from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  background: #548be3;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #fff;
`;
const FooterHeading = styled.h3`
  font-size: 2.5rem;
  margin: 1rem 1rem;
`;
const FooterText = styled.p`
  font-size: 1.5rem;
`;
const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FooterIcons = styled.div`
  display: flex;
  font-size: 2.5rem;
  color: #fff;
`;

const LinkedIcon = styled(BsLinkedin)`
  margin: 0.3rem 1rem;
`;

const InstaIcon = styled(BsInstagram)`
  margin: 0.3rem 1rem;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <TextContainer>
          <FooterHeading>Loop</FooterHeading>
          <FooterText>
            {' '}
            3 Jordan Close Leavesden Watford Hertfordshire WD25 7AF
          </FooterText>
        </TextContainer>
        <IconsContainer>
          <FooterIcons>
            <LinkedIcon />
            <InstaIcon />
          </FooterIcons>
        </IconsContainer>
      </FooterContainer>
    </div>
  );
};

export default Footer;
