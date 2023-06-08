import styled from 'styled-components'
import { mobileQuery } from '../../StyledVariables';

const CardContainer = styled.div`
  background: ${props => `url(${props.imageurl}) no-repeat`};
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
  text-shadow: 1px 1px 5px rgba(0,0,0,.7);
  @media (max-width: ${mobileQuery}px) {
    padding: 0 1.2em;
    background-position: 70%;
    justify-content: end;
    padding-bottom: 3em;
    text-shadow: .5px .5px 3px rgba(0,0,0,.7);
  }
`

const CardDescription = styled.div`
  width:  550px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${mobileQuery}px) {
    width: 220px;
  }
`

const CardTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: .5em;
  @media (max-width: ${mobileQuery}px) {
    font-size: 2rem;
  }
`

const CardSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  @media (max-width: ${mobileQuery}px) {
    font-size: 1.3rem;
  }
`

const CardBtn = styled.button`
  padding: 1em 4em;
  background-color: #FADE4B;
  border: 1px solid transparent;
  color: #000000;
  border-radius: 35px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: .9rem;
  box-shadow: inset 0 2px 0 0 rgba(255,255,255,0.2);
  margin-top: 2.5em;
  cursor: pointer;
  &:hover {
    background-color: #dec33b;
    box-shadow: 5px 5px 8px rgba(124, 124, 124, 0.2);
  }
  @media (max-width: ${mobileQuery}px) {
    padding: 1em 3em;
    font-size: .8rem;
    margin-top: 1.5em;
  }  
`

const CardImage = styled.img`
  width: 400px;
  margin-bottom: 2.5em;
  margin-left: -50px;
  @media (max-width: ${mobileQuery}px) {
    width: 250px;
    margin-left: -35px;
  }  
`

export { CardContainer, CardTitle, CardSubtitle, CardBtn, CardDescription, CardImage }