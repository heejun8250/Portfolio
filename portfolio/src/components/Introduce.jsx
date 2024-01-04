import React from 'react'
import styled from 'styled-components'

const Introduce = () => {
  return (
    <>
      <IntroTitleWrap>Introduce</IntroTitleWrap>
      <IntroTextWrap>
        안녕하세요. 프론트엔드 개발자를 꿈꾸는 양희준입니다.
        <br/>
        항상 자기계발에 주력하고 최신 기술을 습득하여 업계의 최신 동향을 따라가는 개발자가 되겠습니다.
        <br/>
        열정, 노력, 그리고 협업 능력을 통해 회사와 팀의 성공에 기여할 준비가 되어 있습니다.
      </IntroTextWrap>
    </>
  )
}

export default Introduce

const IntroTitleWrap = styled.div`
  border-left: rgb(97, 65, 193) solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`

const IntroTextWrap = styled.span`
  margin-top: 20px;
  padding-left: 10px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover{
      text-decoration: underline;
      color: blue;
    }
  }
`

