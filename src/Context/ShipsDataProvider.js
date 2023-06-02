import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
export const ShipsData = createContext()

export const ShipsDataProvider = ({ children }) => {
  // State of fetched ships data from API
  const [ ships, setShips ] = useState([])
  // State for API pagination
  const [ page, setPage ] = useState(1)
  // State for setting the ship's infinite scrolling
  const [ loading, setLoading ] = useState(false)
  // Ships in LocalStorage
  const shipsArr = JSON.parse(localStorage.getItem('ships'))
  
  // URL to be fetched dynamically
  const URL = `https://swapi.dev/api/starships/?page=${page}`

  const fetchData = async () => {
    try {
      await axios.get(URL)
        .then(({ data }) => {
          const shipsData = data.results.map(ship => {
            // add custom id to each ship for ulterior use
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

  // Set fetched ships array to localStorage only when page is greater than 1 to avoid localStorage updating on re-renders
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
