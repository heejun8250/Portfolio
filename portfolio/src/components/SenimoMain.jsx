import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const SenimoMain = () => {

  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  useScrollToTop()

  return (
    <PjExplainField>
      Senimo
    </PjExplainField>
  )
}

export default SenimoMain

const PjExplainField = styled.div`
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
`