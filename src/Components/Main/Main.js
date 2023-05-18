// import axios from 'axios'
// import { useEffect } from 'react'

import { ShipContainer, ShipCardName, ShipCardModel } from './Styles';

const Main = ({ name, model }) => {

// const URL = "https://swapi.dev/api/starships/?page=1"

// useEffect(() => {
//   axios.get(URL)
//     .then(data => console.log(data.data.results))
// }, [])

  return (
    <ShipContainer>
      <ShipCardName>{ name }</ShipCardName>
      <ShipCardModel>{ model }</ShipCardModel>
    </ShipContainer>
  )
}

export default Main