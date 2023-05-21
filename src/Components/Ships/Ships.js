import { ShipsContainer, ShipsCardName, ShipsCardModel } from './Styles';
import { Link } from 'react-router-dom';
import { ShipsData } from '../../Context/ShipsDataProvider';
import { useContext } from 'react';

const Ships = () => {

  const ships = useContext(ShipsData)

  const shipsEl = ships.map(({ name, model, id }) => {
    return (
    <Link key={ id } to={`/ships/${ id }`}>
      <ShipsContainer>
        <ShipsCardName>{ name }</ShipsCardName>
        <ShipsCardModel>{ model }</ShipsCardModel>
      </ShipsContainer>
    </Link>
    )
  }
  )

  return (
      [ shipsEl ]
  )
}

export default Ships