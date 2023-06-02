import {CardContainer, CardSubtitle, CardTitle, CardBtn, CardDescription, CardImage} from './Styles';
import { Link } from 'react-router-dom'

// Cards for the home page carousel or slider
const Card = ({imageurl, title, subtitle, hasImg = false }) => {

  return (
    <CardContainer imageurl={ imageurl }>
      <CardDescription>
        { hasImg ? <CardImage src={ title }alt='anniversary logo'/> : <CardTitle>{ title }</CardTitle>}
        <CardSubtitle>{ subtitle }</CardSubtitle>
        <Link to={'/ships'}><CardBtn>find movie's ship</CardBtn></Link> 
      </CardDescription>
    </CardContainer>
  )
}

export default Card