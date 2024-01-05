import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideContents = () => {
  return (
    <SideContentsBox>
      <Link to='/travelmate'>TravelMate</Link>
      <Link to='/senimo'>Senimo</Link>
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
    color: black;
    margin-bottom: 20px;
    text-decoration: none;

    &:hover{
      color: rgb(70, 165, 209);
      text-decoration: underline;
    }
  }
`