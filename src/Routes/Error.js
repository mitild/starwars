import { useRouteError } from "react-router-dom"
import styled from 'styled-components'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <ErrorContainer style={{color: '#FFF'}}>
      <h1>Ops...</h1>
      <p>{ error.data || error.statusText }</p>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  height: 100vh;
`

export default Error  