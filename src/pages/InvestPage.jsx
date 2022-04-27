import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

import InvImage from '../images/InvestPageImg.jpg';
import money from '../images/money.jpg';

const InvestSection = styled.div``;

const Header = styled.div`
  height: 80vh;
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InvestHeading = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const InvestInfo = styled.div`
  margin: 3rem 5rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  ul {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const InvestImage = styled.img`
  width: 90%;
  border-radius: 5px;
`;

const MoreInfo = styled.div`
  margin: 4rem 5rem;

  h3 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const InvestPage = () => {
  return (
    <InvestSection>
      <Header>
        <HeaderImage src={InvImage} />
      </Header>

      <HeadingContainer>
        <InvestHeading>Let your money work for you, RISK FREE</InvestHeading>
      </HeadingContainer>

      <MainContainer>
        <InvestInfo>
          <h3>Our Loan Agreement</h3>
          <ul>
            <li>It's a Low Risk Loan to us.</li>
            <li>10% Fixed Interest rate will be paid to you.</li>
            <li>Interest paid bi-annually.</li>
            <li>12 month term.</li>
            <li>Secured against all assets and not one project.</li>
          </ul>

          <h3> Financial Investment</h3>
          <ul>
            <li>£10,000 minimum</li>
            <li>No maximum </li>
            <li>You can invest on any day of the year, even Christmas day.</li>
            <li>That's it.</li>
          </ul>
          <Button to='/contact' primary='true'>
            Contact Us
          </Button>
        </InvestInfo>

        <InvestImage src={money} />
      </MainContainer>

      <MoreInfo>
        <h3>Even More Reasons</h3>
        <p>
          We always have projects evolving and opportunities presented to us.
          Whether we are just about to purchase something, in the middle of
          refurbishing or extending, there is always a need for finance when you
          know how to manage money.
        </p>
        <p>
          Bank finance is available to us, but it can be slow in arriving and
          great opportunities can be missed.
        </p>
        <p>
          We have a very strong mix of buy-to-let properties that provide a
          healthy monthly cash flow. We also have development projects that move
          more slowly, but inject significant income to our balance sheet.
        </p>
        <p>
          With a growing property portfolio worth in excess of £3.7m and growing
          and projects that we have consistently had an average ROI of 37%, we
          believe we are a safe pair of hands to invest with.
        </p>

        <p>
          Inviting investors to join us means that we can do even more of what
          we are great at and investors don't have to rely on Banks to erode
          their capital.
        </p>
      </MoreInfo>
    </InvestSection>
  );
};

export default InvestPage;
