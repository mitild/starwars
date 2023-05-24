import styled from 'styled-components'

const ShipsContainer = styled.div`
  width: 900px;
  background-color: #1D1E1F;
  color: #B5B7B7;
  font-family: 'Space Mono', monospace;
  padding: 1em;
  margin: 1em auto;
  transition: all .3s;
  &:hover {
    background-color: #B5B7B7;
    color: #1D1E1F;
  }
`

const ShipsCardName = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: .25em;
`

const ShipsCardModel = styled.p`
  font-size: .9rem;
`
const LoadingContainer = styled.div`
  position: fixed;
  bottom: 5px;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  text-align: center;
  padding: 1em 2em;
  border-radius: 52px;
  background-color: rgba(73, 70, 70, 0.5);
  font-family: 'Space Mono', monospace;
`


export { ShipsContainer, ShipsCardName, ShipsCardModel, LoadingContainer }

