import React from 'react'
import styled from 'styled-components'

const MyInfo = () => {
  return (
    <InfoBox>
        <MyInfoBox>
          <img src="images/exImg.jpeg" width={210} height={230} />
          <div className="info_box">
            <div className="name_box">
              <div className="in_name_box">
                <h1>양희준</h1>
                <h3>(Heejun Yang)</h3>
              </div>
            </div>
            <ConDiv>
              <p>Email.</p>
              <span>gmlwns262@gmail.com</span>
            </ConDiv>
            <ConDiv>
              <p>GitHub.</p>
              <a href='https://github.com/heejun8250'>https://github.com/heejun8250</a>
            </ConDiv>
          </div>
        </MyInfoBox>
      </InfoBox>
  )
}

export default MyInfo

const InfoBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const MyInfoBox = styled.div`
  display: flex;
  
  @media screen and (min-width: 1024px){
    display: flex;
    justify-content: center;
    align-items: center;

    & .info_box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-left: 30px;
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 1023px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .info_box{
      width: 100%;
      margin-top: 40px;
      align-items: center;
    }
  }

  & img {
    border-radius: 50%;
  }

  & .info_box {
    
    & .name_box {
      width: 100%;
      display: flex;
      justify-content: left;
      margin-bottom: 20px;
    
      & .in_name_box {
        display: flex;

        h1 {
          font-size: 2.5rem;
          margin: 0;
          border-bottom: green solid 5px;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: end;
          margin: 0 8px 0;
        }
      }
    }
  }
`

const ConDiv = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  margin: 10px 0 0 0;
  @media screen and (min-width: 1024px){
    span {
      margin-left: 30px;
    }

    a {
      margin-left: 30px;
    }

  }
  @media screen and (max-width: 1023px){
    width: 100%;
    span {
      margin-left: 10px;
    }

    a {
      margin-left: 10px;
    }
  }

  p {
    width: 70px;
    margin: 0;
    font-weight: bold;
  }

  span {
    font-size: 0.88rem
  }

  a {
    text-decoration: none;
    font-size: 0.88rem;
    color: black;
    
    &:hover{
      text-decoration: underline;
      color: blue;
    }
  }
`