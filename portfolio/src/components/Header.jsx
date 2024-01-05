import React from 'react'
import styled from 'styled-components'
import SideList from './SideList';
import SideContents from './SideContents';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";


const Header = () => {

  const publicUrl = process.env.PUBLIC_URL;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <HeaderArea>
      <BtnBox>
        <BackBtn onClick={handleBack}/>
      </BtnBox>
      {/* <a href='/Portfolio'>🧑‍💻Dev Jun</a> */}
      <Link to='/'>
        <img src={`${publicUrl}/images/webLogo.png`} alt='타이틀 이미지' width={45} height={45}></img>
      </Link>
      <SideList>
        <SideContents />
      </SideList>
    </HeaderArea>
  )
}

export default Header;

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: fixed;
  -webkit-box-align: center;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
  left: 0px;
  z-index: 10;

    /* a {
      color: black;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
    } */

  img {
    margin-left: 20px;
  }

  @media screen and (max-width: 1023px){
    justify-content: center;

    img {
      margin-left: 0;
    }
  }
`

const BtnBox = styled.div`
  width: 0;
`

const BackBtn = styled(BiArrowBack)`
    display: none;
    position: absolute;
    width: auto;
    height: 32px;
    z-index: 9999999999999;
    top: 15px;
    left: 15px;
    color: black;

  &:hover{
    color: gray;
  }

  @media screen and (max-width: 1023px){
    display: block;
  }
`