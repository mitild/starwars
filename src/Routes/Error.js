import styled from 'styled-components'
import errorImg from '../Assets/errorImg.webp'
import Navbar from "../Components/Navbar"
import { mobileQuery } from '../StyledVariables';

// Custom error component for the entire web
const Error = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ErrorContainer>
        <ErrorImg src={ errorImg } alt="Error message"/>
        <ErrorH2>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.</ErrorH2>
      </ErrorContainer>
    </>
  )
}

const ErrorContainer = styled.div`
  background-color: #151515;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  height: 100vh;
  padding-bottom: 6em;
`

const ErrorH2 = styled.h2`
  margin-top: 3em;
  @media (max-width: ${mobileQuery}px) {
    width: 300px;
    text-align: center;
  }
`

const ErrorImg = styled.img`
  width: 450px;
  @media (max-width: ${mobileQuery}px) {
    width: 300px;
  }
`

export default Error  