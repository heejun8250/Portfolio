import React from 'react'
import styled from 'styled-components'

const Introduce = () => {
  return (
    <>
      <IntroTitleWrap>Introduce</IntroTitleWrap>
      <IntroTextWrap>
        (예시) 부트캠프에서 개발 기초를 탄탄히 다지고, 프로젝트를 통해 문제 해결 능력을 향상시켰습니다.
          <br />
          목표를 달성하기 위해 어떤 어려움이든 극복하는 데 희열을 느끼며, 끈기 있는 태도로 프로젝트를 완수했습니다.
          <br />
          다른 팀원과의 원활한 협업을 통해 더 나은 결과를 창출하는 경험이 있습니다.
          <br />새로운 기술과 도구를 습득하고, 항상 자기계발에 주력하여 업계의 최신 동향을 따라가고자 합니다.
          <br />팀의 성공을 위해 열정, 노력, 그리고 협업 능력을 기여할 준비가 되어 있습니다.
          <br/>
          <br/>
      </IntroTextWrap>
    </>
  )
}

export default Introduce

const IntroTitleWrap = styled.div`
  border-left: green solid 10px;
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

