import React from 'react';
import styled, { css } from 'styled-components';
import couch from '../images/devpageImages/wendover-1/5.webp';

const Container = styled.div`
  margin: 0;
  padding: 0;

  height: 100vh;
`;

const Section = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75vh;
  width: 90vw;
  background: #fff;
  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.4);
  display: flex;

  @media screen and (max-width: 760px) {
    position: relative;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #548be3;
  box-sizing: border-box;
  background: linear-gradient(
      0deg,
      rgba(58, 113, 201, 0.6),
      rgba(58, 113, 201, 0.9)
    ),
    url(${couch});
  background-position: center;
  background-size: cover;
  padding: 1rem 2rem;
  line-height: 1.5;

  @media screen and (max-width: 760px) {
    display: none;
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Paytone One', sans-serif;
  text-transform: uppercase;
  color: #fff;
`;

const Info = styled.p`
  color: #fff;
  z-index: 10;
  line-height: 1.2;
  font-size: 1.4rem;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  padding: 4rem 2rem;

  @media screen and (max-width: 760px) {
    padding: 2rem 2rem;
  }
`;

const FormHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Paytone One', sans-serif;
  text-transform: uppercase;
  color: #548be3;
`;

const inputStyle = css`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 0.8rem;
  box-sizing: border-box;
  font-size: 1.4rem;
`;

const NameInput = styled.input`
  ${inputStyle};
`;
const EmailInput = styled.input`
  ${inputStyle};
`;
const SubjectInput = styled.input`
  ${inputStyle};
`;

const MessageInput = styled.textarea`
  ${inputStyle};
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const FormButton = styled.button`
  background: ${({ primary }) => (primary ? '#548be3' : 'CD853f')};
  white-space: nowrap;
  outline: none;
  border: none;
  text-decoration: none;
  max-width: 350px;
  padding: 0 15px;
  cursor: pointer;
  tex-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactPage = () => {
  return (
    <Container>
      <Section>
        <Left>
          <Heading>Contact Us</Heading>
          <Info>
            If you like what Loop have done so far and you're thinking of
            investing or would like to discuss a joint venture, then you need to
            come and talk to us. You can take comfort that we understand
            construction, own multiple properties with equity and use our own
            money to purchase. We're successful investors in property. Would you
            like to join us?
          </Info>
        </Left>

        <Right>
          <FormContainer>
            <FormHeading>Contact Us</FormHeading>

            <NameInput type='text' required placeholder='Name' />
            <EmailInput type='email' required placeholder='Email' />
            <SubjectInput type='text' required placeholder='Subject' />
            <MessageInput
              type='textarea'
              required
              rows='7'
              placeholder='Message'
            />
            <FormButton primary big>
              Send
            </FormButton>
          </FormContainer>
        </Right>
      </Section>
    </Container>
  );
};

export default ContactPage;
