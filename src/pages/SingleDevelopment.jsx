import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { developmentsData } from '../data/developmentsData';

const Section = styled.div``;

const HeadingContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageHeading = styled.h1`
  font-size: 3rem;
  font-family: 'Paytone One', sans-serif;
  text-transform: uppercase;
  color: #548be3;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  gap: 2em;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 1.5rem 0 1.5rem;
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const InfoImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const InfoImage = styled.img`
  width: 100%;

  margin: 10px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
`;

const HeadingImage = styled.img`
  width: 100%;
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #548be3;
  text-transform: uppercase;
`;

const SubHeading = styled.h1`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;
const PurchaseMethod = styled.p`
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin-bottom: 1rem;

  h4 {
    color: green;
  }

  span {
    color: #548be3;
    margin-left: 5px;
  }
`;

const ImagesContainer = styled.div`
  margin: 5rem 1.5rem 0 1.5rem;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px;

  margin-bottom: 3rem;
`;

const ImageStyle = css`
  width: 100%;
  height: 400px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);

  :hover {
    transform: translateY(-10px);
    transition: 0.3s all ease-in-out;
  }
`;

const GalleryContainer = styled.div`
  ${ImageStyle}
  position: relative;
  cursor: pointer;
`;

const ImageContent = styled.h2`
  background: transparent;
  font-size: 5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 400px;

  transition: opacity 1s ease;
  color: #fff;
  opacity: 0;

  &:hover {
    opacity: 1;
    background: rgba(58, 113, 201, 0.6);
  }
`;

const Image = styled.img`
  ${ImageStyle}
  width: 100%;
  height: 100%;
`;

const ImageView = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  display: ${({ background }) => (background ? 'none' : 'block')};
  transition: 0.3s ease-in-out;
`;

const ImageBox = styled.div`
  width: 60vw;
  height: 70vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   background: url(${({ image }) => (image ? image : 'none')});

  display: ${({ background }) => (background ? 'none' : 'block')};

  @media screen and (max-width: 900px) {
    height: 55vh;
  }
`;

const ImagePopup = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
`;
const arrowButtons = css`
  font-size: 48px;

  color: #fff;
  cursor: pointer;
  background: #53a3e6;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  position: absolute;
  top: 50%;
  transfrom: translate(-50%);

  &:hover {
    background: #548be3;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(AiOutlineArrowLeft)`
  ${arrowButtons}
  left: 0px;
`;

const NextArrow = styled(AiOutlineArrowRight)`
  ${arrowButtons}
  right: -15px;
`;

const SingleDevelopment = () => {
  const [background, setBackground] = useState(true);
  const { id } = useParams();

  const development = developmentsData.find((dev) => dev.path === id);

  const {
    title1,
    title2,
    img,
    images,
    purchaseMethod,
    purchasePrice,
    salePrice,
    ROI,
    heading,
    description,
    note,
  } = development;

  console.log(development.images);

  const length = images.length;

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const nextSlide = () => {
    if (currentIndex + 1 >= length) {
      setCurrentIndex(0);
      const newUrl = images[0];
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
      const newUrl = images[length - 1];

      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const {} = development;
  return (
    <Section>
      <MainContainer>
        <TextContainer>
          <InfoContainer>
            <MainHeading>{title1}</MainHeading>
            <SubHeading>{title2}</SubHeading>
            <PurchaseMethod>
              Purchase Method: <span>{purchaseMethod}</span>{' '}
            </PurchaseMethod>
            <PurchaseMethod>
              Purchase Price: <span>£{purchasePrice}</span>{' '}
            </PurchaseMethod>
            <PurchaseMethod>
              Sale Price: <span>£{salePrice}</span>
            </PurchaseMethod>
            <PurchaseMethod>
              ROI:<span>{ROI}</span>{' '}
            </PurchaseMethod>
            <PurchaseMethod> {heading}</PurchaseMethod>
            <PurchaseMethod>{description}</PurchaseMethod>
          </InfoContainer>

          <InfoImageContainer>
            <InfoImage src={img} />
          </InfoImageContainer>
        </TextContainer>

        <ImagesContainer>
          {images.map((item, index) => (
            <GalleryContainer
              key={index}
              onClick={() => handleClick(item, index)}
            >
              <Image src={item} />
              <ImageContent
                background={background}
                onClick={() => setBackground(!background)}
              >
                Image
              </ImageContent>
            </GalleryContainer>
          ))}
        </ImagesContainer>
      </MainContainer>

      <ImageView
        background={background}
        onClick={() => setBackground(!background)}
      ></ImageView>

      <ImageBox background={background}>
        <ImagePopup src={clickedImg} />
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />
      </ImageBox>
    </Section>
  );
};

export default SingleDevelopment;
