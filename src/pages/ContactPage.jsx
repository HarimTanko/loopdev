import React from 'react';
import styled, { css } from 'styled-components';
import couch from '../images/devpageImages/wendover-1/5.webp';

const Section = styled.div`
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  padding: 8% 0 0;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 45px;
`;

const InfoSection = styled.div`
  position: absolute;
  z-index: 12;
  background: #ffffff;
  max-width: 500px;
  height: 80%;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

  background: linear-gradient(
      0deg,
      rgba(58, 113, 201, 0.6),
      rgba(58, 113, 201, 0.9)
    ),
    url(${couch});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Right = styled.div`
  width: 50%;
  padding: 8% 0 0;
`;

const FormSection = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 500px;
  height: 80%;
  margin: 0 0 100px;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.form``;

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
    <Section>
      <Left>
        <InfoSection>
          <Heading>Contact</Heading>
          <Info>
            If you like what Loop have done so far and you're thinking of
            investing or would like to discuss a joint venture, then you need to
            come and talk to us. You can take comfort that we understand
            construction, own multiple properties with equity and use our own
            money to purchase. We're successful investors in property. Would you
            like to join us?
          </Info>
        </InfoSection>
      </Left>

      <Right>
        <FormSection>
          <FormContainer>
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
        </FormSection>
      </Right>
    </Section>
  );
};

export default ContactPage;
