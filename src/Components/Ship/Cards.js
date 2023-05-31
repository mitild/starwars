import { useEffect, useState } from 'react';
import { CardMain, CardProps, CardTitle, CardImg } from './Styles';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
  const { id } = useParams()
  const location = useLocation();
  const linkData = location.state;
  const [ pilotData, setPilotData ] = useState({})
  const [ filmData, setFilmData ] = useState({})

  const dynamicParam = linkData ? 'films' : 'people'

  const URL = `https://swapi.py4e.com/api/${dynamicParam}/${id}`

  useEffect(() => {
    axios.get(URL)
      .then(data => {
        const response = data.data
        linkData ? setFilmData(response): setPilotData(response)
      }) 
    },[])
    
    const { name, birth_year, height, mass, hair_color, skin_color, eye_color, gender } = {...pilotData}
    const { title, release_date, director, producer, opening_crawl } = {...filmData}

    const currentParam = linkData ? 'films' : 'characters'

  return (
    <>
    <CardMain>
      <CardImg src={`https://starwars-visualguide.com/assets/img/${currentParam}/${id}.jpg`} alt="character portrait" />
      <div>
        <CardTitle>{ linkData ? title : name }</CardTitle>
        <CardProps>{ linkData ? release_date : `Birth Year: ${birth_year}` }</CardProps>
        <CardProps>{ linkData ? director : `Gender: ${gender}` }</CardProps>
        <CardProps>{ linkData ? producer : `Height: ${height}` }</CardProps>
        <CardProps>{ linkData ? `Opening Crawl: ${opening_crawl}` : `Mass: ${mass}` }</CardProps>
        {
          !linkData &&
          <>
            <CardProps>{ `Hair Color: ${hair_color}` }</CardProps>
            <CardProps>{ `Skin Color: ${skin_color}` }</CardProps>
            <CardProps>{ `Eye Color: ${eye_color}` }</CardProps>
          </>
        }
      </div>
    </CardMain>
    </>
  )
}

export default Cards