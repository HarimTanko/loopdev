import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaBed, FaCouch, FaCar } from 'react-icons/fa';
import { GiBathtub, GiGraveFlowers } from 'react-icons/gi';
import { BsGraphUp } from 'react-icons/bs';

import { lettingsData } from '../data/lettingsData';

const Section = styled.div``;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  gap: 2em;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  margin: 5rem 1.5rem 0 1.5rem;
`;

const TopHalf = styled.div`
  display: flex;
  text-transform: uppercase;
`;
const BottomHalf = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  margin-top: 3rem;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
`;

const HeadDescription = styled.p`
  font-size: 1.8rem;
  font-family: 'Quicksand', sans-serif;
  line-height: 1.5;
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
  height: 500px;
  margin: 0 3rem;

  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #548be3;
  text-transform: uppercase;
`;

const SubHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

const GreenSpan = styled.span`
  color: #088036;
`;
const PurchaseMethod = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;

  ${GreenSpan} {
    color: #088036;
  }

  h4 {
    color: green;
  }

  span {
    color: #548be3;
    margin-left: 5px;
    font-family: 'Quicksand', sans-serif;
  }
`;

const CardIcons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: #548be3;
`;

const BathIcon = styled(GiBathtub)``;

const HouseIcons = styled.div`
  padding: 10px 0;
  font-size: 1.7rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    color: #548be3;
    margin-left: 20px;
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

  ${PurchaseMethod} {
    font-size: 2.5rem;
  }

  &:hover {
    opacity: 1;
    background: rgba(58, 113, 201, 0.6);
  }

  h4 {
    font-size: 2.5rem;
    padding: 10px 20px;
  }

  p {
    font-size: 1.5rem;
    padding: 0 20px;
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

const GalleryText = styled.h2`
  grid-column: 1/ -1;
  place-self: center;
  font-size: 3rem;
  margin: 4rem 0 1rem 0;
  text-transform: uppercase;
  color: #548be3;
`;

const SingleLetting = () => {
  const [background, setBackground] = useState(true);
  const [current, setCurrent] = useState(0);

  const { id } = useParams();

  const lettings = lettingsData.find((dev) => dev.path === id);

  const {
    title1,
    title2,
    img,
    images,
    purchaseMethod,
    purchasePrice,
    value,
    ownership,
    bedrooms,
    reception,
    bathrooms,
    parking,
    garden,
    heading,
    description,
    note,
  } = lettings;

  const length = images.length;

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const nextSlide = () => {
    if (currentIndex + 1 >= length) {
      setCurrentIndex(0);

      const newUrl = images[0].image;

      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];
    setClickedImg(newItem.image);

    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
      const newUrl = images[length - 1].image;

      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0];

    setClickedImg(newItem.image);
    setCurrentIndex(newIndex);
  };

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };
  return (
    <Section>
      <MainContainer>
        <TextContainer>
          <TopHalf>
            <InfoContainer>
              <MainHeading>{title1}</MainHeading>
              <SubHeading>{title2}</SubHeading>
              <PurchaseMethod>
                Purchase Method: <span>{purchaseMethod}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod>
                Purchase Price : <span>£{purchasePrice}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod>
                {' '}
                Ownership: <span> {ownership}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod>
                Value: <GreenSpan>£{value}</GreenSpan>{' '}
              </PurchaseMethod>

              <CardIcons>
                <HouseIcons>
                  <IconContainer>
                    <FaBed />
                    <span>{bedrooms}</span>
                  </IconContainer>
                  <IconContainer>
                    <FaCouch />
                    <span>{reception}</span>
                  </IconContainer>
                  <IconContainer>
                    <BathIcon />
                    <span>{bathrooms}</span>
                  </IconContainer>

                  <IconContainer>
                    {' '}
                    <FaCar />
                    <span>{parking}</span>
                  </IconContainer>
                  <IconContainer>
                    {' '}
                    <GiGraveFlowers />
                    <span>{garden}</span>
                  </IconContainer>
                </HouseIcons>
              </CardIcons>
            </InfoContainer>

            <InfoImageContainer>
              <InfoImage src={img} />
            </InfoImageContainer>
          </TopHalf>

          <BottomHalf>
            <HeadDescription>{description}</HeadDescription>
          </BottomHalf>
        </TextContainer>

        <ImagesContainer>
          {images.map((item, index) => (
            <GalleryContainer
              key={index}
              onClick={() => handleClick(item, index)}
            >
              <Image src={item.image} />
              <ImageContent
                background={background}
                onClick={() => setBackground(!background)}
              >
                <PurchaseMethod>{item.captionTitle}</PurchaseMethod>
                <p>{item.caption}</p>
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

      {/* <ImageBox
        background={background}
        onClick={() => setBackground(!background)}
        image={image}
      >
        <PrevArrow />
        <NextArrow />
      </ImageBox> */}
    </Section>
  );
};

export default SingleLetting;
