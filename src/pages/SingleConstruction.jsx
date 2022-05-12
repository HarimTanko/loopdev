import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { constructionData } from '../data/constructionData';

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

  @media screen and (max-width: 920px) {
    margin: 0;
    padding: 0;
  }
`;

const TextContainer = styled.div`
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  margin: 5rem 1.5rem 0 1.5rem;

  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
    text-align: center;
  }

  @media screen and (max-width: 760px) {
    padding: 0;
    text-align: center;
  }
`;

const TopHalf = styled.div`
  display: flex;
  text-transform: uppercase;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
  }
`;
const BottomHalf = styled.div`
  width: 100%;
  padding: 2rem 0;

  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;

const HeadDescription = styled.p`
  font-size: 1.5rem;
  font-family: 'Quicksand', sans-serif;
  line-height: 1.5;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    text-align: center;
    padding: 0;
  }
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;

const InfoImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const InfoImage = styled.img`
  height: 500px;
  width: 100%;
  padding: 1rem 2rem;
  margin: 0 auto;
  border-left: 0.5px solid #548be3;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
    padding: 0.5rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #548be3;
  text-transform: uppercase;

  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
const PurchaseMethod = styled.p`
  font-size: 1.5rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;

  h4 {
    color: green;
  }

  span {
    color: #548be3;
    margin-left: 5px;
    font-family: 'Quicksand', sans-serif;
  }

  @media screen and (max-width: 760px) {
    font-size: 1rem;
  }
`;

const ImagesContainer = styled.div`
  padding: 1rem 5rem;
  margin: 5rem 1.5rem 0 1.5rem;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px;
  margin-bottom: 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px;
    justify-items: center;
    width: 100%;
    margin: auto;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 0;
    padding: 10px;
  }
`;

const ImageStyle = css`
  width: 100%;
  height: 400px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);

  :hover {
    transform: translateY(-10px);
    transition: 0.3s all ease-in-out;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const GalleryContainer = styled.div`
  max-width: 100%;
  height: 400px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 100%;
  }
`;

const ImageContent = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 400px;

  transition: opacity 1s ease;
  color: #fff;
  opacity: 0;

  h4 {
    margin: 1rem 2rem;
    font-size: 2.5rem;

    @media screen and (max-width: 760px) {
      margin: 0.5rem 1rem;
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 0 2rem;

    @media screen and (max-width: 760px) {
      font-size: 0.5rem;
    }
  }

  &:hover {
    opacity: 1;
    background: rgba(58, 113, 201, 0.6);
  }

  @media screen and (max-width: 760px) {
    height: 300px;
  }
`;

const Image = styled.img`
  ${ImageStyle}
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    height: 300px;
  }

  @media screen and (max-width: 760px) {
    height: 300px;
  }
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

  display: ${({ background }) => (background ? 'none' : 'block')};

  @media screen and (max-width: 760px) {
    height: 40vh;
    width: 90vw;
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

  @media screen and (max-width: 600px) {
  }
`;

const SingleDevelopment = () => {
  const [background, setBackground] = useState(true);
  const { id } = useParams();

  const project = constructionData.find((dev) => dev.path === id);

  const {
    title1,
    title2,
    img,
    images,
    projectType,
    contractValue,
    warrantyProvider,
    programme,
    heading,
    description,
    note,
  } = project;

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

  return (
    <Section>
      <MainContainer>
        <TextContainer>
          <TopHalf>
            <InfoContainer>
              <MainHeading>{title1}</MainHeading>
              <SubHeading>{title2}</SubHeading>
              <PurchaseMethod>
                Project Type: <span>{projectType}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod>
                Contract Value : <span>£{contractValue}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod>
                Warranty Provider: <span>{warrantyProvider}</span>
              </PurchaseMethod>
              <PurchaseMethod>
                Programme:<span>{programme}</span>{' '}
              </PurchaseMethod>
              <PurchaseMethod> {heading}</PurchaseMethod>
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
              <Image src={item} />
              <ImageContent
                background={background}
                onClick={() => setBackground(!background)}
              ></ImageContent>
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
