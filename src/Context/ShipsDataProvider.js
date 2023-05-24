import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
import Navbar from '../Components/Navbar'
export const ShipsData = createContext()

export const ShipsDataProvider = ({ children }) => {
  const [ ships, setShips ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)
  
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
    fetchData()
  }, [page])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       setLoading(true)
  //       setTimeout(()=> {
  //         setPage(prevPage => prevPage + 1)
  //         setLoading(false)
  //       }, 2000)
  //     }
  //   } 
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);


    console.log(ships)
  return (
    <ShipsData.Provider value={{ ships, loading, setLoading, page, setPage }}>
      { children }
    </ShipsData.Provider>
  )
}
