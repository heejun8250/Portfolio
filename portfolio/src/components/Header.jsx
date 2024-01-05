import React from 'react'
import styled from 'styled-components'
import SideList from './SideList';
import SideContents from './SideContents';


const Header = () => {

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <HeaderArea>
      {/* <a href='/Portfolio'>🧑‍💻Dev Jun</a> */}
      <img src={`${publicUrl}/images/webLogo.png`} alt='타이틀 이미지' width={45} height={45}></img>
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

    a {
      color: black;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
    }

    img {
      margin-left: 20px;
    }
`