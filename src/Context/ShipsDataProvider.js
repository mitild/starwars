import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
export const ShipsData = createContext()

export const ShipsDataProvider = ({ children }) => {
  const [ ships, setShips ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)
  const shipsArr = JSON.parse(localStorage.getItem('ships'))
  
  const URL = `https://swapi.dev/api/starships/?page=${page}`

  const fetchData = async () => {
    try {
      await axios.get(URL)
        .then(({ data }) => {
          const shipsData = data.results.map(ship => {
            ship.id = ship.url.replace(/\D/g, "")
            return ship
        })
        if(page === 1) {
          setShips(shipsData)
        } 
        else {
          setShips(prevData => [ ...prevData, ...shipsData ])
        }
      })
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page])

  useEffect(() => {
    if(page > 1) {
      localStorage.setItem('ships', JSON.stringify(ships))
    }
  }, [ships])

  
  

  return (
    <ShipsData.Provider value={{ ships, loading, setLoading, page, setPage, shipsArr }}>
      { children }
    </ShipsData.Provider>
  )
}
