import { ObjectsThumb, ShipDescriptionSm } from './Styles';
import { Link } from 'react-router-dom'

const CardThumbnails = ({ objects }) => { 
  // Variable for determining image's url endpoints (characters or films)
  const filmOrPeople = objects.map(each => each.includes('films')).includes(true)

  const cardEl = objects.map((object, index) => {
    // Get people's or film's id needed to fetch the correct image of them from the array of urls at the ship object
    const id = object.replace(/\D/g, "")

    // Dynamically set url's endpoints
    const dynamicParams = filmOrPeople ? `films/${id}.jpg` : `characters/${id}.jpg`

    // Link to the Character or Film Card
    return <Link to={`${id}`} key={ index } state={ filmOrPeople } ><ObjectsThumb src={ `https://starwars-visualguide.com/assets/img/${ dynamicParams }` }/></Link>
  })

  // Handle not found item
  const noEl = <ShipDescriptionSm>no items found...</ShipDescriptionSm>

  return (
    cardEl.length !== 0 ? cardEl : noEl 
  )
}

export default CardThumbnails