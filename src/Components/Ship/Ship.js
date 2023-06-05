import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ShipName, ShipContainer, ShipImg, ShipProperty, ShipDescription, ShipPropertySm, ShipDescriptionSm, DescriptionWrapperTwo, DescriptionWrapper,CardWrapper } from './Styles';
import CardThumbnails from './CardThumbnails';
import {ShipsData} from '../../Context/ShipsDataProvider';
import Error from '../../Routes/Error';

const Ship = () => {
  // All elements provided by USerContext
  const { ships, shipsArr } = useContext(ShipsData)

  // Parameter with visited ship's name
  const { shipid } = useParams()

  // Print loading... while fecthing for data
  if (ships.length === 0) {
    return <p>Loading...</p>;
  }

  // Get the ship that was visited and clicked by it's name provided by the useParams hook.
  const shipEl = shipsArr ? shipsArr.find(ship => ship.name.split(' ').join('-') === shipid) : ships.find(ship => ship.name.split(' ').join('-') === shipid)

  // Destructure the shipEl object
  const { name, model, starship_class , manufacturer, cost_in_credits, crew, passengers, cargo_capacity, consumables, length, max_atmosphering_speed, hyperdrive_rating, MGLT, id, pilots, films } = shipEl

  // Catch for those ships without images
  function handleError(e){
    e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }

  return (
    <>
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

          <CardWrapper>
            <div>
              <ShipPropertySm>PILOTS:</ShipPropertySm>
              <CardThumbnails objects={ pilots } />
            </div>
            <div>
              <ShipPropertySm>FILMS:</ShipPropertySm>
              <CardThumbnails objects={ films } />
            </div>
          </CardWrapper>
        </ShipContainer>
        :
        <Error /> 
      }
    </>
  )
}

export default Ship
