import { useEffect, useState } from 'react'
import { CardMain, CardProps, CardTitle, CardImg } from './Styles'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'

const Cards = () => {
  // Clicked thummbnail id
  const { id } = useParams()
  // Get the link state
  const location = useLocation()
  // State from previous link with boolean value to set if the clicked element was either a film or a character
  const linkData = location.state
  // State for fetched pilot's data
  const [ pilotData, setPilotData ] = useState({})
  // State for fetched film's data
  const [ filmData, setFilmData ] = useState({})

  // Dynamically provide the right endpoint for fetching
  const dynamicParam = linkData ? 'films' : 'people'

  const URL = `https://swapi.py4e.com/api/${dynamicParam}/${id}`

  // Fetch pilot's or film's data & store it in it's own state
  useEffect(() => {
    axios.get(URL)
      .then(data => {
        const response = data.data
        linkData ? setFilmData(response): setPilotData(response)
      }) 
    },[])

    // Destructered pilot's object
    const { name, birth_year, height, mass, hair_color, skin_color, eye_color, gender } = {...pilotData}

    // Destructered film's object
    const { title, release_date, director, producer, opening_crawl } = {...filmData}

    // Get the endpoint for the matching image
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