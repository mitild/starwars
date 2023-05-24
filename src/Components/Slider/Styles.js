import styled from 'styled-components'

const CardContainer = styled.div`
  background: ${props => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 8em;
  font-family: "din-condensed", sans-serif;
  text-shadow: 1px 1px 5px rgba(0,0,0,.7)
`

const CardDescription = styled.div`
  width:  600px;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: .5em;
`

const CardSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
`

const CardBtn = styled.button`
  padding: 1em 5em;
  background-color: #FADE4B;
  border: 1px solid transparent;
  color: #000000;
  border-radius: 35px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1rem;
  box-shadow: inset 0 2px 0 0 rgba(255,255,255,0.2);
  margin-top: 2.5em;
  cursor: pointer;
  &:hover {
    background-color: #dec33b;
    box-shadow: 5px 5px 8px rgba(124, 124, 124, 0.2)
  }  
`

const CardImage = styled.img`
  width: 400px;
  margin-bottom: 2.5em;
  margin-left: -50px;
`

export { CardContainer, CardTitle, CardSubtitle, CardBtn, CardDescription, CardImage }