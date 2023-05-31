import { ObjectsThumb, ShipDescriptionSm } from './Styles';
import { Link } from 'react-router-dom'

const CardThumbnails = ({ objects }) => { 
  const filmOrPeople = objects.map(each => each.includes('films')).includes(true)

  const cardEl = objects.map((object, index) => {
    const id = object.replace(/\D/g, "")
    const dynamicParams = filmOrPeople ? `films/${id}.jpg` : `characters/${id}.jpg`

    return <Link to={`${id}`} key={ index } state={ filmOrPeople } ><ObjectsThumb src={ `https://starwars-visualguide.com/assets/img/${ dynamicParams }` }/></Link>
  })

  const noEl = <ShipDescriptionSm>no items found...</ShipDescriptionSm>

  return (
    cardEl.length !== 0 ? cardEl : noEl 
  )
}

export default CardThumbnails