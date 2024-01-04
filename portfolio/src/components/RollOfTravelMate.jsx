import React from 'react'
import styled from 'styled-components'

const RollOfTravelMate = () => {
  return (
    <RollField>
      <TmRollTitleWrap>개요</TmRollTitleWrap>
      <TmPjExplainBox>
        <span>광주 인공지능 사관학교 교육을 들으며 진행한 첫 번째 프로젝트입니다.</span>
        <span>여행 수요의 증가와 동행자와의 성향차이로 인한 갈등, 여행을 떠나 새로운 사람과의 만남을 추구하는 여행객이 늘어남에 따라 
          본인의 성향과 맞는 동행자를 찾아 즐거운 여행을 할 수 있도록 도움을 주는 플랫폼을 만들어보고자 기획하게 되었습니다.</span>
      </TmPjExplainBox>
      <DivLine/>
      <TmMyRoleTitleBox>
        <TmRollTitleWrap>구현한 기능</TmRollTitleWrap>
        <TmMyRole>Front-End</TmMyRole>
      </TmMyRoleTitleBox>
      <TmMyRoleExplainBox>
        <span>1. 페이지 레이아웃 구성 및 구현</span>
        <li>Header, 메인페이지, 파티장/파티원 선택페이지, 일정 생성페이지, 일정 보기페이지</li>
        <li>지역선택/일정상세보기 모달창 내부, SideBar/SideBar 내부</li>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>2. 메인페이지</span>
        <li>문구, 이미지, '동행찾기'버튼 애니메이션 효과</li>
        <li>'동행찾기'버튼 hover 효과</li>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>3. Header</span>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>4. SideBar</span>
        <li>오른쪽 상단 햄버거 버튼 클릭 시 토글 되는 형식으로 구현</li>
        <li>SideBar가 열려 있을 때 버튼 혹은 외부 클릭 시 SideBar가 닫히도록 구현</li>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>5. 파티장/파티원 선택페이지</span>
        <li>선택 버튼 애니메이션, hover 효과</li>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>6. 모달창</span>
        <li>파티장 페이지에서 지역선택 시</li>
        <span className="explainDetails">- 내부에 카카오맵 Api를 사용하여 지도 랜더링</span>
        <li>일정보기 페이지에서 일정 클릭 시</li>
        <span className="explainDetails">- 일정 상세보기</span>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>7. 드래그 앤 드랍 기능</span>
        <li>일정생성 페이지에서 날짜 간 이동이 가능하도록 구현</li>
      </TmMyRoleExplainBox>
      <TmMyRoleExplainBox>
        <span>8. 태그 기능</span>
        <li>태그 입력창에 텍스트 입력 시 아이콘과 함께 태그화 되도록 구현</li>
      </TmMyRoleExplainBox>
    </RollField>
  )
}

export default RollOfTravelMate

const RollField = styled.div`
  margin-top: 570px;
  padding-top: 40px;
`

const TmMyRoleTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`

const TmRollTitleWrap = styled.div`
  border-left: green solid 8px;
  padding-left: 12px;
  font-size: 1.5rem;
  font-weight: bold;
` 

const TmPjExplainBox = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

const TmMyRole = styled.div`
  color: #079707;
  font-size: 1.375rem;
  font-weight: bold;
  margin-left: 10px;
  display: flex;
  align-items: end;
`

const TmMyRoleExplainBox = styled(TmPjExplainBox)`
  span {
    font-weight: 700;
  }

  li {
    margin: 10px 0 0 18px;
  }

  .explainDetails {
    font-weight: 500;
    margin: 5px 0 0 40px;
    font-size: .875rem;
    color: rgb(88, 88, 88);
  }
`

const DivLine = styled.div`
  margin: 50px 0;
  height: 1px;
  background-color: lightgray;
`