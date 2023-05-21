import { styled } from "styled-components"

const ShipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 3em;
  text-transform: uppercase;
  position:relative;
  &:before {
    position: absolute;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .3;
    background-image: url('../ships-bg.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -1;
  }

`

const ShipName = styled.h2`
  color: #FFF;
`

const ShipImg = styled.img`
  width: 600px;
  border-bottom: 1px solid #355fd1;
  border-radius: 5px;
  box-shadow: 3px 10px 18px rgba(172, 171, 171, 0.2);
`

const ShipProperty = styled.p`
  color: #FFF;
`

const ShipDescription = styled.span`
  color: #B5B7B7;
`

const ShipPropertySm = styled(ShipProperty)`
  font-size: 1.1rem;
`

const ShipDescriptionSm = styled(ShipDescription)`
  font-size: 1.1rem;
`

const DescriptionWrapper = styled.div`
  align-self: flex-start;
`

const DescriptionWrapperTwo = styled.div`
  display: flex;
  gap: 2em;
`

const Pilots = styled.img`
  width: 50px;
`

export { ShipContainer, ShipName, ShipImg, ShipProperty, ShipDescription, ShipPropertySm, ShipDescriptionSm, DescriptionWrapper,  DescriptionWrapperTwo, Pilots }

