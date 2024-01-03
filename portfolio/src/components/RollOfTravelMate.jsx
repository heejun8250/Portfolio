import React from 'react'
import styled from 'styled-components'

const RollOfTravelMate = () => {
  return (
    <RollField>
      <TmRollTitleWrap>개요</TmRollTitleWrap>
      <TmOutlineBox>
        <span>광주 인공지능 사관학교 교육을 들으며 진행한 첫 번째 프로젝트입니다.</span>
        <span>여행 수요의 증가와 동행자와의 성향차이로 인한 갈등, 여행을 떠나 새로운 사람과의 만남을 추구하는 여행객이 늘어남에 따라 
          본인의 성향과 많는 동행자를 찾아 즐거운 여행을 할 수 있도록 도움음 주는 플랫폼을 만들어보고자 기획하게 되었습니다.</span>
      </TmOutlineBox>
      <DivLine/>
      <TmMyRoleBox>
        <TmRollTitleWrap>구현한 기능</TmRollTitleWrap>
        <TmMyRole>Front-End</TmMyRole>
      </TmMyRoleBox>
    </RollField>
  )
}

export default RollOfTravelMate

const RollField = styled.div`
  margin-top: 570px;
  padding-top: 40px;
`

const TmRollTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2rem;
  font-weight: bold;
` 

const TmMyRoleBox = styled.div`
  display: flex;
  flex-direction: row;
`

const TmOutlineBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

const TmMyRole = styled.div`
  color: #079707;
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  display: flex;
  align-items: end;
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`