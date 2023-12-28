import React from 'react'
import styled from 'styled-components'

const Skill = () => {
  return (
    <>
      <SkillTitleWrap>Skill</SkillTitleWrap>
      <SkillBox>
        <div>
          <span>Front-End(Web)</span>
          <li>HTML/CSS, JavaScript, React.js, Styled-components</li>
        </div>
        <hr />
        <div>
          <span>Front-End(App)</span>
          <li>Kotlin</li>
        </div>
        <hr />
        <div>
          <span>Back-End</span>
          <li>Node.js</li>
        </div>
        <hr />
        <div>
          <span>Database</span>
          <li>MySQL</li>
        </div>
        <hr />
        <div>
          <span>Tool</span>
          <li>VS Code, Android Studio, GitHub, Figma</li>
        </div>
      </SkillBox>
    </>
  )
}

export default Skill

const SkillTitleWrap = styled.div`
  border-left: green solid 10px;
  padding-left: 16px;
  font-size: 2.5rem;
  font-weight: bold;
`

const SkillBox = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  @media screen and (min-width: 1024px){
    div{
      flex-direction: row;
      align-items: center;

      li {
        margin-left: 50px;
      }
    }
  }
  @media screen and (max-width: 1023px){
    div{
      flex-direction: column;
      align-items: start;
    }
  }

    div {
      display: flex;
      

      span {
        width: 200px;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
`