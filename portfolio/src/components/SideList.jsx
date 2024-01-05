import React, { useEffect, useRef, useState } from 'react'
import { BiMenu, BiArrowToRight } from "react-icons/bi";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideList = ({ width = 280, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  const ListOpen = () => {
    if (xPosition < 0) {
      setX(0);
      setIsOpen(true);
    } else {
      setX(-width);
      setIsOpen(false);
    }
  };

  const closeSideList = () => {
    setX(-width);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClose = (e) => {
      if (isOpen && side.current && !side.current.contains(e.target)) {
        closeSideList()
      }
    };

    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, [isOpen, width]);

  return (
    <SideListBox 
      ref={side} 
      width={`${width}px`} 
      transform={`translatex(${-xPosition}px)`}>
      {isOpen
        ?
        <ListCloseBtn onClick={ListOpen} />
        :
        <ListOpenBtn onClick={ListOpen} />
      }
      <div>
        <Link to="/" onClick={closeSideList}>
          {children}
        </Link>
      </div>
    </SideListBox>
  )
}

export default SideList


const SideListBox = styled.div`
  box-shadow: inset 1.2px 0 0 lightgray;
  border-radius: 20px 0 0 20px;
  width: ${(props) => props.width};
  transform: ${(props) => props.transform};
  height: 100%;
  background-color: #e3ecf1;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.4s ease;
  z-index: 9999;
`

const ListOpenBtn = styled(BiMenu)`
  position: relative;
  top: 15px;
  width: 32px;
  height: 32px;
  z-index: 9999999999999;
  overflow: hidden;
  left: -50px;
  color: black;

  &:hover{
    color: gray;
  }
`

const ListCloseBtn = styled(BiArrowToRight)`
  position: relative;
  top: 15px;
  width: 32px;
  height: 32px;
  z-index: 9999999999999;
  overflow: hidden;
  left: 10px;
  color: black;

  &:hover{
    color: gray;
  }
`