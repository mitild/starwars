import {CardContainer, CardSubtitle, CardTitle, CardBtn, CardDescription, CardImage} from './Styles';
import { Link } from 'react-router-dom'

const Card = ({imageUrl, title, subtitle, hasImg = false }) => {

  return (
    <CardContainer imageUrl={ imageUrl }>
      <CardDescription>
        { hasImg ? <CardImage src={ title }alt='anniversary logo'/> : <CardTitle>{ title }</CardTitle>}
        <CardSubtitle hasImg>{ subtitle }</CardSubtitle>
        <Link to={'/ships'}><CardBtn hasImg>Explore</CardBtn></Link> 
      </CardDescription>
    </CardContainer>
  )
}

export default Card