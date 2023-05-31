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
const CardWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ObjectsThumb = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: .7em .3em .5em 0;
`

const CardMain = styled.div`
  display: flex;
  gap: 1em;
  background-color: #FFF;
  width: 60%;
  margin: 3em auto;
  font-family: "din-condensed", sans-serif;
  font-size: 1.3rem;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.3);
`

const CardTitle = styled.h3`
  color: #181818;
  margin: .6em 0 .4em;
`

const CardProps = styled.p`
  color: #514f4f;
  font-weight: 300;
  margin: 0 2em .4em 0;
`

const CardImg = styled.img`
  width: 270px;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
`

export { ShipContainer, ShipName, ShipImg, ShipProperty, ShipDescription, ShipPropertySm, ShipDescriptionSm, DescriptionWrapper,  DescriptionWrapperTwo, ObjectsThumb, CardMain, CardTitle, CardProps, CardImg, CardWrapper }

