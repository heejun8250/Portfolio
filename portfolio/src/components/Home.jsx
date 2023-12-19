import React from 'react'
import styled from 'styled-components'
import Introduction from './Introduce'
import MyInfo from './MyInfo'
import Skill from './Skill'
import Experience from './Experience'

const Home = () => {
  return (
    <HomeField>
      <MyInfo />
      <DivLine />
      <Introduction />
      <DivLine />
      <Skill />
      <DivLine />
      <Experience />
      <DivLine />
      <h2 className='tytext'>Thank you!</h2>
    </HomeField>
  )
}

export default Home

const HomeField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding-top: 85px;
  padding-bottom: 85px;
  margin: auto;
  @media screen and (max-width: 1024px){
    width: 80%;
  }
  
  .tytext{
    display: flex;
    justify-content: center;
  }
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`