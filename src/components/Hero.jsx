import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowForward } from 'react-icons/io';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  @media screen and (max-width: 800px) {
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(96, 172, 235, 0.6) 0%,
      rgba(96, 172, 235, 0.6) 50%,
      rgba(96, 172, 235, 0.6) 100%
    );
  }

  @media screen and (max-width: 935px) {
    height: 95vh;
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  @media screen and (max-width: 935px) {
    height: 95vh;
  }
`;
const HeroContent = styled.div`
  position: relative;
  top: 5rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  @media screen and (max-width: 768px) {
    top: 1rem;
  }

  h1 {
    font-size: clamp(1rem, 10vw, 6rem);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: clamp(0.5rem, 8vw, 2rem);
    font-weight: bold;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
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

  &:hover {
    background: #548be3;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(AiOutlineArrowLeft)`
  ${arrowButtons}
`;

const NextArrow = styled(AiOutlineArrowRight)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.image} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <h3>{slide.subTitle}</h3>
                  <Button
                    to={slide.path}
                    primary='true'
                    css={`
                      font-size: 1.5rem;
                    `}
                    big
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
