import React from 'react'
import styled from 'styled-components'

const SideContents = () => {
  return (
    <SideContentsBox>
      <a href='/travelmate'>TravelMate</a>
      <a href='/senimo'>Senimo</a>
    </SideContentsBox>
  )
}

export default SideContents

const SideContentsBox = styled.div`
  margin-top: 30px;
  padding: 10px 0 0 20px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;


    &:hover{
      color: rgb(70, 165, 209);
      text-decoration: underline;
    }
  }
`