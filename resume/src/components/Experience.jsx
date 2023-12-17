import React from 'react'
import styled from 'styled-components'

const Experience = () => {
  return (
    <>
      <ExTitleWrap>Education</ExTitleWrap>
      <EduBox>
        <li>광주 인공지능사관학교</li>
        <span>- 기간 : 2023.06 ~ 2023.12</span>
        <span>- 과정 : App과정</span>
      </EduBox>
      <DivLine/>
      <ExTitleWrap>Experience</ExTitleWrap>
      <ExBox>
        <li className='pjType'>Team Project</li>
        <a href='/tm'>1. TravelMate</a>
        <span className='pjExplain'>- 성향·리뷰기반 동행자 추천 및 매칭 플랫폼</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.07 ~ 2023.08 (약 3주)</span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>참여 인원</span>
          <span className='pjContent'>프론트엔드 2명 / 백엔드 2명 / 머신러닝 1명</span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>React.js / Firebase / Python / Flask / Github / KakaoMap API / 
            <br/> 로지스틱 회귀
          </span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>구현 기능</span>
          <div className='pjContent'>
            <li>여행 성향 설문조사 기능</li>
            <li>여행일정 및 동행자 모집글 등록 기능</li>
            <li>여행일정 드래그앤드랍 기능</li>
            <li>성향에 기반한 맞춤 일정 추천 기능</li>
            <li>동행 신청 및 수락 기능</li>
            <li>채팅 및 리뷰 기능</li>
            <li>동행온도</li>
          </div>
        </ProjectBox>

        <a href='/senimo'>2. Senimo</a>
        <span className='pjExplain'>- 액티브 시니어층을 위한 모임 커뮤니티 플랫폼 앱</span>
        <ProjectBox>
          <span className='pjTitle'>프로젝트 기간</span>
          <span className='pjContent'>2023.10 ~ 진행 중</span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>참여 인원</span>
          <span className='pjContent'>프론트엔드 2명 / 백엔드 2명 / 풀스택 1명</span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>사용 기술</span>
          <span className='pjContent'>Kotlin / Android Studio / Node.js / MySQL / Github / Figma</span>
        </ProjectBox>
        <hr/>
        <ProjectBox>
          <span className='pjTitle'>구현 기능</span>
          <div className='pjContent'>
            <li>모임 검색 및 생성 기능</li>
            <li>모임 관리 및 일정 생성 기능</li>
            <li>게시판 기능</li>
            <li>뱃지 시스템 기능</li>
            <li>사진첩 기능</li>
            <li>채팅 기능</li>
          </div>
        </ProjectBox>
      </ExBox>
    </>
  )
}

export default Experience

const ExTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
` 

const ExBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  
  .pjType {
    font-size: 1.6rem;
    font-weight: bold;
  }

  a {
    color: #079707;
    font-size: 25px;
    font-weight: bold;
    margin: 15px 0;
    text-decoration: none;

    &:hover{
      color: blue;
      text-decoration: underline;
    }
  }

  .pjExplain{
    margin-bottom: 10px;
  }

  hr {
    width: 100%;
  }
`

const EduBox = styled(ExBox)`
  display: flex;
  flex-direction: column;

  li {
    font-size: 1.3rem;
    font-weight: bold;
  }

  span {
    margin-top: 10px;
    padding-left: 30px;
  }
`

const ProjectBox = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.85fr;
  margin: 15px 0;

  .pjTitle {
    font-weight: bold;
  }

  .pjContent {
    margin-left: 25px;
  }

  li {
    font-size: 1rem;
  }
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`