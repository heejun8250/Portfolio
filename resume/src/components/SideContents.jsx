import React from 'react'
import styled from 'styled-components'

const SideContents = () => {
  return (
    <SideContentsBox>
      <a href='/tm'>TravelMate</a>
      <a href='/senimo'>Senimo</a>
    </SideContentsBox>
  )
}

export default SideContents

const SideContentsBox = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;


    &:hover{
      color: green;
      text-decoration: underline;
    }
  }
`