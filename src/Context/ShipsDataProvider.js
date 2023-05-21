import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
export const ShipsData = createContext()

export const ShipsDataProvider = ({ children }) => {
  const [ ships, setShips ] = useState([])
  
  const URL = "https://swapi.dev/api/starships/?page=1"

  useEffect(() => {
    try {
          const storedShipsData = localStorage.getItem('shipsData')
          if(storedShipsData) {
            setShips(JSON.parse(storedShipsData))
          } 
          else {
            axios.get(URL)
              .then(({ data }) => {
                const shipsData = data.results.map(ship => {
                  ship.id = ship.url.replace(/\D/g, "")
                  return ship
                  })
                setShips(shipsData)
                localStorage.setItem('shipsData', JSON.stringify(shipsData));
                })
          } 
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [])

  return (
    <ShipsData.Provider value={ ships }>
      { children }
    </ShipsData.Provider>
  )
}
