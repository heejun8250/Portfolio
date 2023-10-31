import React from 'react'
import styled from 'styled-components'
import SideList from './SideList';
import SideContents from './SideContents';



const Header = () => {
  return (
    <HeaderArea>
      {/* <a href='/'>{"<>🧑‍💻Dev Jun</>"}</a> */}
      <a href='/'>🧑‍💻Dev Jun</a>
      {/* <a href='/'>{"<🧑‍💻Dev Jun />"}</a> */}
      <SideList width={298}>
        <SideContents />
      </SideList>
    </HeaderArea>
  )
}

export default Header;

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  -webkit-box-align: center;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
  left: 0px;
    a {
      margin-left: 20px;
      color: black;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
    }
`