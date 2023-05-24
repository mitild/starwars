import { useRouteError } from "react-router-dom"
import styled from 'styled-components'
import errorImg from '../Assets/errorImg.webp'
import Navbar from "../Components/Navbar"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <Navbar />
      <ErrorContainer>
        <img src={ errorImg } alt="Error message" width='500px'/>
        <ErrorH2>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.
        </ErrorH2>
        <p>{ error.data || error.statusText }</p>
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
`

const ErrorH2 = styled.h2`
  margin-top: 3em;
`

export default Error  