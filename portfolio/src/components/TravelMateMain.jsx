import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { CgMouse } from "react-icons/cg";
import RollOfTravelMate from './RollOfTravelMate';


const TravelMateMain = () => {

  const publicUrl = process.env.PUBLIC_URL;

  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  useScrollToTop()

  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < 100) {
      setScrollDirection('up');
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PjExplainField>
      <BackGroundImg imgUrl={`${publicUrl}/images/travelMateBg8.jpg`}>
        <ImgLogBox>
          <img src={`${publicUrl}/images/travelmateLogo.png`} alt='TravelMate 로고'/>
        </ImgLogBox>
      </BackGroundImg>
      <MouseScrollBox hide={scrollDirection === 'down'}>
        <CgMouse className='MIcon' />
        <span>Scroll</span>
      </MouseScrollBox>
      <RollOfTravelMate />
    </PjExplainField>
  )
}

export default TravelMateMain

const sdbAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(10px);
  }
  40% {
    transform: translateY(0);
  }
`;

const PjExplainField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 85px;
`

const BackGroundImg = styled.div` 
  height: 100vh;

  &::before{
    content: "";
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-size: cover;
    background-repeat: no-repeat; 
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    @media screen and (max-width: 1024px){
    background-position: center;
    }
  }
`

const ImgLogBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  padding-top: 85px;

  img {
    z-index: 1;
  }

  @media screen and (max-width: 1024px){
      img {
      width: 70vw;
    }
  }

  @media screen and (min-width: 1023px){
      img {
      width: 40vw;
    }
  }
`

const MouseScrollBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: ${({ hide }) => (hide ? '115%' : '90%')};
  left: 90%;
  transform: translate(-90%, -90%);
  transition: top 0.8s ease-in-out;

  .MIcon {
    width: 35px;
    height: 35px;
    animation: ${sdbAnimation} 2s infinite;
  }

  span {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
  }
`