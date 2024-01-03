import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { CgMouse } from "react-icons/cg";
import RollOfTravelMate from './RollOfTravelMate';


const TravelMateMain = () => {

  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection('down');
    } else {
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
      <ImgLogBox>
        <img src="images/travelmateLogo.png" />
      </ImgLogBox>
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
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
`

const ImgLogBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1024px){
      img {
      width: 50%;
    }
  }

  @media screen and (min-width: 1023px){
      img {
      width: 35%;
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
  top: ${({ hide }) => (hide ? '110%' : '90%')};
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