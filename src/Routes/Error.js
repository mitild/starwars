import styled from 'styled-components'
import errorImg from '../Assets/errorImg.webp'
import Navbar from "../Components/Navbar"

// Custom error component for the entire web
const Error = () => {
  return (
    <>
      <Navbar />
      <ErrorContainer>
        <img src={ errorImg } alt="Error message" width='450px'/>
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
`

export default Error  