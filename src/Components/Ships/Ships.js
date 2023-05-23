import { ShipsContainer, ShipsCardName, ShipsCardModel, LoadingContainer } from './Styles';
import { Link } from 'react-router-dom';
import { ShipsData } from '../../Context/ShipsDataProvider';
import { useContext } from 'react';

const Ships = () => {
  const { ships, loading } = useContext(ShipsData)
  
  const shipsEl = ships.map(({ name, model, id }) => {
    return (
      <Link key={ id } to={`/ships/${ id }`} style={{ textDecoration: 'none'}}>
        <ShipsContainer>
          <ShipsCardName>{ name }</ShipsCardName>
          <ShipsCardModel>{ model }</ShipsCardModel>
        </ShipsContainer>
      </Link>
    )
  })

  return (
    <>
    { shipsEl }
    {loading && <LoadingContainer><p>Loading more ships...</p></LoadingContainer>} 
    </>
  )
}

export default Ships