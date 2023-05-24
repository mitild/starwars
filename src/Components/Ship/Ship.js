import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {ShipName, ShipContainer, ShipImg, ShipProperty, ShipDescription, ShipPropertySm, ShipDescriptionSm, Pilots, DescriptionWrapperTwo, DescriptionWrapper} from './Styles';
import {ShipsData} from '../../Context/ShipsDataProvider';
import Error from '../../Routes/Error';
import Navbar from '../Navbar'

const Ship = () => {
  const { ships } = useContext(ShipsData)
  const { shipid } = useParams()

  if (ships.length === 0) {
    return <p>Loading...</p>;
  }

  const shipEl = ships.find(ship => ship.id === shipid)

  const { name, model, starship_class , manufacturer, cost_in_credits, crew, passengers, cargo_capacity, consumables, length, max_atmosphering_speed, hyperdrive_rating, MGLT, id } = shipEl

  function handleError(e){
    e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }

  return (
    <>
      <Navbar />
      {
        shipEl !== undefined
        
        ? 
        
        <ShipContainer>

          <ShipName>{ name }</ShipName>
          <ShipImg src={ `https://starwars-visualguide.com/assets/img/starships/${id}.jpg` } alt={ `${ name } image`} onError={ handleError }/>
          <DescriptionWrapper>
            <ShipProperty>MODEL: 
              <ShipDescription> { model }</ShipDescription>
            </ShipProperty>
            <ShipProperty>STARSHIP CLASS: 
              <ShipDescription> { starship_class }</ShipDescription>
            </ShipProperty>
            <ShipProperty>MANUFACTURER:  
              <ShipDescription> { manufacturer }</ShipDescription>
            </ShipProperty>
            <ShipProperty>COST:  
              <ShipDescription> { cost_in_credits }</ShipDescription>
            </ShipProperty>
          </DescriptionWrapper>
          <DescriptionWrapperTwo>
            <div>
              <ShipPropertySm>CREW: 
                <ShipDescriptionSm> { crew }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>PASSENGER CAPACITY: 
                <ShipDescriptionSm> { passengers }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>CARGO CAPACITY: 
                <ShipDescriptionSm> { cargo_capacity }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>CONSUMABLES: 
                <ShipDescriptionSm> { consumables }</ShipDescriptionSm>
              </ShipPropertySm>
            </div>

            <div>
              <ShipPropertySm>LENGTH: 
                <ShipDescriptionSm> { length }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>MAXIMUM ATMOSPHERIC SPEED: 
                <ShipDescriptionSm> { max_atmosphering_speed }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>HYPERDRIVE RATING: 
                <ShipDescriptionSm> { hyperdrive_rating }</ShipDescriptionSm>
              </ShipPropertySm>

              <ShipPropertySm>MAXIMUM SPEED IN REALSPACE: 
                <ShipDescriptionSm> { MGLT }</ShipDescriptionSm>
              </ShipPropertySm>
            </div>
          </DescriptionWrapperTwo>

          <DescriptionWrapper>
            <ShipPropertySm>PILOTS:</ShipPropertySm>
            <Pilots src="" alt="" /> 
          </DescriptionWrapper>

        </ShipContainer>
        :
        <Error /> 
      }
    </>
  )
}

export default Ship
